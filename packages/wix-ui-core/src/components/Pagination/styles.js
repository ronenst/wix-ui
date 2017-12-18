import {core} from './theme';
import defaultsDeep from 'lodash/defaultsDeep';

export const styles = theme => {
  theme = defaultsDeep(theme, core);

  return {
    root: {
      border: '2px solid #eee',
      padding: '20px'
    },
    pageNumber: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '20px',
      minHeight: '20px',
      border: '1px solid #eee',
      borderRadius: '50%',
      margin: '3px',
      cursor: 'pointer',
      fontSize: theme.fontSize,
      '&:hover': {
        color: theme.hover.color,
        backgroundColor: theme.hover.backgroundColor,
        borderColor: theme.hover.borderColor
      }
    }
  };
};
