import React from 'react';
import ProductsInDB from './ProductsInDB';
import AmountOfProductsInDB from './AmountOfProductsInDB';
import AmountOfUsersInDB from './AmountOfUsersInDB';

function ContentRowTop(){
    return (
        <div className="row">
        {/* <!-- Products in DB --> */}
            <ProductsInDB />

        {/* <!-- $$$ of all products in DB --> */}
            <AmountOfProductsInDB />

        {/* <!-- Amount of users in DB --> */}
            <AmountOfUsersInDB />
    </div>
    )
}

export default ContentRowTop;