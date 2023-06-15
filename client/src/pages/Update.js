import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';

function callApi4() {
    const id = document.getElementById('id2').value;
    const hp = document.getElementById('hp2').value;
  
    const url = `/api/heroes/${id}`;
  
    axios.put(url, {hp})
      .then(response => {
        console.log(response.data);
        alert('La vida del heroe se ha actualizado');
      })
      .catch(error => {
        console.error(error);
        alert('Error actualizando el dato de vida del heroe');
      });
  }
  
const Update = (props) => {
    return (
      <div className='derecha' >
      <Navbar brand ="Overwatch Heroes App" />
      <div>
      <h1 className="home-text09">Modificar la vida de un heroe</h1>
      <input type="text" placeholder="ID:" className="input" id='id2' />
      <input type="text" placeholder="HP:" className="input" id='hp2' />
      <button className="defaultButton"onClick={callApi4}>Actualizar</button>
      </div>
      </div>
    );
  }
  export default Update;