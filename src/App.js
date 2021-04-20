import React from 'react';
import Navbar from './components/Navbar';
import RespTable from './components/RespTable';
import Search from './components/Search';

import './index.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <RespTable />
    </div>
  );
}

export default App;
