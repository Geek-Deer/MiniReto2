import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Table from './components/table';

const Home = (props) => {
  return (
    <>
    <div className='derecha' >
    <Navbar brand ="Overwatch Heroes App" />
    <div > 
      <Table />
    </div>
    </div>
    </>
  );
}
export default Home;
