import * as React from 'react';

function isReactClassComponent(value: any): value is React.ComponentClass<any> {
  return value && isComponentInstance(value.prototype);
}

function isComponentInstance(value: any): value is React.Component {
  return value && value instanceof React.Component;
}

function withStylableStateful<CoreProps, ExtendedProps = {}>(
  Component: React.ComponentClass<CoreProps>,
  stylesheet: RuntimeStylesheet,
  getState: (p?: any, s?: any, c?: any) => StateMap,
  extendedDefaultProps: object = {}): React.ComponentClass<CoreProps & ExtendedProps> {

  return class StylableComponent extends Component implements React.PureComponent<CoreProps & ExtendedProps> {

    static defaultProps = Object.assign({}, Component.defaultProps, extendedDefaultProps);

    public props: Readonly<CoreProps & ExtendedProps>;

    render() {
      const root = super.render();
      if (!root) { return null; }
      const className = root.props && root.props.className || '';
      const statesMap = getState(this.props, this.state, this.context);
      const props = stylesheet(`root ${className ? className : ''}`.trim(), statesMap);
      return React.cloneElement(root, props);
    }
  } as any;
}

function withStylableStateless<CoreProps, ExtendedProps = {}>(
  Component: React.SFC<CoreProps>,
  stylesheet: RuntimeStylesheet,
  getState: (p?: any) => StateMap,
  extendedDefaultProps: object = {}): React.SFC<CoreProps & ExtendedProps> {
    const WrapperComponent: React.SFC<CoreProps & ExtendedProps> = (props: CoreProps & ExtendedProps) => {
      const root = Component(props);
      if (!root) { return null; }
      const className = root.props && root.props.className || '';
      const statesMap = getState(props);
      const stylableProps = stylesheet(`root ${className ? className : ''}`.trim(), statesMap);
      return React.cloneElement(root, stylableProps);
    };

    // Copy static properties
    for (let propName in Component) {
      WrapperComponent[propName] = Component[propName];
    }

    WrapperComponent.defaultProps = Object.assign({}, Component.defaultProps, extendedDefaultProps);
    return WrapperComponent;
}

export function withStylable<CoreProps, ExtendedProps = {}>(
  Component: React.ComponentClass<CoreProps> | React.SFC<CoreProps>,
  stylesheet: RuntimeStylesheet,
  getState: (p?: any, s?: any, c?: any) => StateMap,
  extendedDefaultProps: object = {}): React.ComponentClass<CoreProps & ExtendedProps> | React.SFC<CoreProps & ExtendedProps> {
    type BaseProps = CoreProps & {className?: string};

    if (isReactClassComponent(Component)) {
      return withStylableStateful<BaseProps, ExtendedProps>(Component as React.ComponentClass<BaseProps>, stylesheet, getState, extendedDefaultProps);
    } else {
      return withStylableStateless<BaseProps, ExtendedProps>(Component as React.SFC<BaseProps>, stylesheet, getState, extendedDefaultProps);
    }
}