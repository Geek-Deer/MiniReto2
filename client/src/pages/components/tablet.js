import React from 'react';
import Tarea from './tar.js';
import './table.css';

export default function TableT(){
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/tareas")
          .then((res) => res.json())
          .then((data) => setData(data));
      }, []);
    const tableT = data?.map(tarea =>
        <Tarea id = {tarea.id} nombre = {tarea.nombre} descripcion ={tarea.descripcion}/>
    );
    return(
        <div>
        <table className="table table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>

            </tr>
            </thead>
            <tbody>
            {tableT} 
            </tbody>
        </table>
    </div>
    );
}