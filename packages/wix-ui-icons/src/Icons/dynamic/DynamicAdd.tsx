import * as React from 'react';
import Dynamic from '../Dynamic';
import AdminAccess from '../dist/components/AdminAccess';
import Addchannel from '../dist/components/Addchannel';
import Add from '../dist/components/Add';

const mappings = [
  {
    Component: AdminAccess,
    size: ['48px', '2em'],
    width: ['48px', '2em'],
    height: ['48px', '2em'],
  },
  {
    Component: Add,
    size: ['24px', '1em'],
    width: ['24px', '1em'],
    height: ['24px', '1em'],
  },
  {
    Component: Addchannel
  }
];

export default props => {
  return <Dynamic mappings={mappings} {...props}/>;
};
