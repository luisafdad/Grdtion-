import React, { useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const Contar = () => {

    const [numeros, setNumeros] = usState(0);

    return
        <div className='ner-fluid m-3 p-4'>
            <p>{numeros}</p>
            <button>+</button>
            <button>-</button>

        </div>

}