import * as React from 'react';

const parse = d => {
  const value = parseFloat(d);
  const type = d.replace(value, '');
  return {value, type};
};

const hasMatch = (d1, d2) => {
  if (!d2) {
    return true;
  }
  if (!d1) {
    return false;
  }
  const parsed1 = parse(d1);
  const match = d2.find(d => parse(d).type === parsed1.type);
  if (!match) {
    return true;
  }
  const parsed2 = parse(match);

  return parsed1.value >= parsed2.value;
};

export default props => {
  const {mappings, width, height, size} = props;

  const matched = mappings.find(mapping =>
    ['size', 'width', 'height'].some(d => hasMatch(props[d], mapping[d]))
  );
  const Component = matched.Component;

  return <Component {...props}/>;
};
