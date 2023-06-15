import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from './components/Navbar';

function callApi3() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const rol = document.getElementById('rol').value;
    const url = document.getElementById('url').value;
    const hp = document.getElementById('hp').value;
    
    const uri = `/api/heroes`;
  
    axios.post(uri, {id,nombre, rol, url, hp})
      .then(response => {
        console.log(response.data);
        alert('El heroe ha sido registrado');
      })
      .catch(error => {
        console.error(error);
        alert('Error registrando al heroe');
      });
  }
  

const Registro = (props) => {
    return (
      <>
      <div className='derecha' >
      <Navbar brand ="Overwatch Heroes App" />
      <div > 
      <h1 className="home-text08">Registrar Heroe</h1>
      <div className="home-container1">
      <input type="text" placeholder="id:" className="input" id='id' />
      <input type="text" placeholder="nombre:" className="input" id='nombre'/>
      <input type="text" placeholder="rol:" className="input" id='rol' />
      <input type="text" placeholder="url de la img:" className="input" id='url'/>
      <input type="text" placeholder="HP:" className="input" id='hp' />
      </div>
      <button className="defaultButton" onClick={callApi3}>Registrar</button>
      </div>
      </div>
      </>
    );
  }
  export default Registro;