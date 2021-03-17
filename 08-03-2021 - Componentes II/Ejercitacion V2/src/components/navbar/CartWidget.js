import React from 'react';
import cart from '../../assets/cart.png';

import '../../styles/cart.css';

const CartWidget = () => {
    return (
        <div className="cart-size">
            <img src={ cart } alt="carrito de compras"  className="float-right cart-size" />
        </div>
    )
}

export default CartWidget;
