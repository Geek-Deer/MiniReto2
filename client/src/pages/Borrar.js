import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';

function callApi5() {
    const id = document.getElementById('id3').value;
    
    const url = `/api/heroes/${id}`;
  
    axios.delete(url)
      .then(response => {
        console.log(response.data);
        alert('El Heroe ha sido eliminado de la base de datos');
      })
      .catch(error => {
        console.error(error);
        alert('Error eliminando al heroe');
      });
}
const Borrar = (props) => {


    return (
      <>
      <div className='derecha' >
      <Navbar brand ="Overwatch Heroes App" />
      <div>
      <h1 className="home-text07">Eliminar heroe</h1>
      <div className="home-container1">
      <input type="text" placeholder="ID:" className="input" id='id3' />
      </div>
      <button className="defaultButton" onClick={callApi5}>Eliminar</button>
      </div>
      </div>
      </>
    );
  }
  export default Borrar;