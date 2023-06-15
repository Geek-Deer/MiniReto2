import React from 'react';


export default function Row({nombre , rol, url, hp}) {
  
    return (

        <tr>
            <td>{nombre}</td>
            <td>{rol}</td>
            <td><img src={url} alt="Imagen del heroe"/></td>
            <td>{hp}</td>
        </tr>

    );
}
