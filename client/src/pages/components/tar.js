import React from 'react';


export default function Tarea({id, nombre , descripcion}) {
  
    return (
        <tr>
            <td>{id}</td>
            <td>{nombre}</td>
            <td>{descripcion}</td>
        </tr>
    );
}