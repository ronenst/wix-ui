import React from 'react';
import Pagination from '../../src/components/Pagination';

export default class Example extends React.Component {
  render() {
    return (
      <div style={{width: '500px', marginLeft: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
        <h3>Lovely</h3>
        <Pagination />
      </div>
    );
  }
}
