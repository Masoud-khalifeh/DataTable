import React from 'react';
import TableGrid from './TableGrid'; // Import the DataTable component
import {FakedData} from './FakedData';

const App = () => {

  return (
    <div style={{width:"90%",height:"80vh", margin:"auto"}}>
      <h1>Sample Data Table</h1>
      <TableGrid data={FakedData.data} columns={FakedData.column} />
    </div>
  );
};

export default App;
