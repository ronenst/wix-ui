import React from 'react';
import {storiesOf} from '@storybook/react';
import ToggleSwitchExample from './ToggleSwitch';
import PaginationExample from './Pagination';

storiesOf('Components', module)
  .add('ToggleSwitch', () => <ToggleSwitchExample/>)
  .add('Pagination', () => <PaginationExample/>);
  