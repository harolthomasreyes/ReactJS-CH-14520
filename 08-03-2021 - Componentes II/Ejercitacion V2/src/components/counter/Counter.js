import React, { useState } from 'react';

export const Counter = ({ initial = 1, stock, onAdd }) => {

    const [counter, setCounter] = useState( initial );

    const handleAdd = () => {
        if ( counter < stock ) {
            setCounter( counter + 1 );
        };
    };

    const handleSubstract = () => {
        if ( counter > 1) {
            setCounter( counter - 1 );
        };
    };

    return (
        <div className="card col-auto mx-auto text-center w-25">
            <h3 className="mt-2">Stock: { stock }</h3>
            <div className="d-flex mt-5 mb-3">
                <button onClick={ handleSubstract } className="btn btn-light pl-3 pr-3"> - </button>
                <input value={ counter } className="form-control text-center" />
                <button onClick={ handleAdd } className="btn btn-light"> + </button>
            </div>
            <button onClick={ e => onAdd( counter ) } className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3"> Agregar </button>

        </div>
    )
}
