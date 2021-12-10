import React from "react";

const PrediosTable = (predios) => {

    // pendiente validar que data sea una lista
    
        const listPredios = () => predios.predios.map(
            (predio) => (
                <tr>
                    <td>{predio.codigo}</td>
                    <td>{predio.cedula}</td>
                    <td>{predio.nombre}</td>
                    <td>{predio.atotal}</td>
                    <td>{predio.aconstruida}</td>
                    <td>{predio.direccion}</td>
                    <td>{predio.barrio}</td>
                    <td>Acciones</td>
                </tr>
            ));
  
/*
    console.log(predios.predios);
    const listPredios = () => (
            <tr>
                <td>prueba</td>
            </tr>

    );*/

    return (
        <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
        >
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Cédula Propietario</th>
                    <th>Nombre Propietario</th>
                    <th>Área Total</th>
                    <th>Área Construida</th>
                    <th>Dirección</th>
                    <th>Barrio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {listPredios()}

            </tbody>
        </table>
    )
};

export default PrediosTable;