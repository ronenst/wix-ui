import React from 'react';
import CorePagination from 'wix-ui-core/Pagination';
import {ThemedComponent} from 'wix-ui-theme';
import {theme} from './theme';

const Pagination = ({...coreProps}) => (
  <ThemedComponent theme={theme}>
    <CorePagination {...coreProps} />
  </ThemedComponent>
);

Pagination.propTypes = {
  ...CorePagination.propTypes
};

export default Pagination;
