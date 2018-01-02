import {horizontalCore, verticalCore, BoxTheme} from './theme';
import * as defaultsDeep from 'lodash/defaultsDeep';

// any <Box /> which isn't vertical will deafult to horizontal - https://github.com/wix/wix-ui/pull/126#discussion_r159144509

export const styles = (theme: BoxTheme) => {
  const verticalTheme = defaultsDeep({...theme}, verticalCore);
  const horizontalTheme = defaultsDeep(theme, horizontalCore);

  const crossAxisAlignmentMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end'
  };

  return {
    boxRoot: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    vertical: {
      alignItems: crossAxisAlignmentMap[verticalTheme.crossAxisAlignment],
      flexDirection: 'column',
      '& >:not(:last-child)': {
        marginBottom: verticalTheme.spacing
      }
    },
    horizontal: {
      alignItems: crossAxisAlignmentMap[horizontalTheme.crossAxisAlignment],
      flexDirection: 'row',
      '& >:not(:last-child)': {
        marginRight: horizontalTheme.spacing
      }
    }
  };
};
