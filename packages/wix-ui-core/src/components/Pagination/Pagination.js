import React from 'react';
import {func, string, bool, object, any} from 'prop-types';
import {createHOC} from '../../createHOC';

class Pagination extends React.PureComponent {
  static propTypes = {
    children: any,
    type: string,
    onClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    disabled: bool,
    classes: object
  };

  static displayName = 'Pagination';

  render() {
    const {disabled, onClick, children, type, onMouseEnter, onMouseLeave, classes} = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.pageNumber}>1</div>
        <div className={classes.pageNumber}>2</div>
        <div className={classes.pageNumber}>3</div>
      </div>
    );
  }
}

export default createHOC(Pagination);
