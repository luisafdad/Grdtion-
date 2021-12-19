import React from "react";
import { Link } from "react-router-dom";

const PrediosTable = (props) => {
    // pendiente validar que data sea una lista
    const predios = props.predios;
    const onDelete = props.onDelete;

        const listPredios = () => predios.map(
            (predio) => (
                <tr>
                    <td>{predio.codigo}</td>
                    <td>{predio.cedula}</td>
                    <td>{predio.nombre}</td>
                    <td>{predio.atotal}</td>
                    <td>{predio.aconstruida}</td>
                    <td>{predio.direccion}</td>
                    <td>{predio.barrio}</td>
                    <td>
                        <button codigo={predio.codigo} onClick={onDelete}>Borrar</button>
                    </td>
                    <td>
                        <Link style={{textDecoration:"none",color: "black",border:"1px solid black",padding: "5px"}} predio={predio} to={"/EditarPredio/" + predio.codigo}>Editar</Link>
                    </td>
                </tr>
            ));
    return (
        <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
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