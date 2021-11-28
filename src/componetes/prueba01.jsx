import React, { useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Contar = () => {

    const [numeros, setNumeros] = useState(0);

    return(
        <div className='conteiner-fluid m-3 p-4'>
            <p>{numeros}</p>
            <button className='btn btn-primary btn-lg'>+</button>
            <button className='btn btn-secondary btn-lg'>-</button>

        </div>
    );

}