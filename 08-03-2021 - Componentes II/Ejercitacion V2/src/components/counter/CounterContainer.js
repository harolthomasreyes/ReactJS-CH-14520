import React, { useState } from 'react';
import { Counter } from './Counter';

export const CounterContainer = () => {
    
    const [stock, setStock] = useState(50);

    const onAdd = ( q ) => {
        if( q <= stock){
            alert(`Has agregado ${q} elementos al carrito.`);
            setStock( stock - q );
        } else {
            alert('No hay suficiente stock.');
        };
    };

    return (
        <div className="mt-5">
            <Counter initial={ 1 } stock={ stock } onAdd={ onAdd }/>
        </div>
    );
};
