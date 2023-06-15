import React from 'react';
import Row from './row.js';
import './table.css';


function Table(){
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/heroes")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
      const table = data?.map(heroe =>
        <Row id = {heroe.id} nombre = {heroe.nombre} rol ={heroe.rol} url ={heroe.url} hp = {heroe.hp}/>
    ); 
    return(
        <div>
        <table className="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Rol</th>
                <th scope="col">Imagen</th>
                <th scope="col">HP</th>
            </tr>
            </thead>
            <tbody>
            {table} 
            </tbody>
        </table>
    </div>
        
    );
};
export default Table;
