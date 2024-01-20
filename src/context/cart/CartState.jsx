import React from 'react';
import cartContext from './Cartcontext';

const CartState = (props) => {

    const product = {
        "Name": "KurthaSuruwal With tree Leaf Design",
        "Detail": "This is a high-quality kurtha suruwal with a beautiful tree leaf design. This is designed just for thee to wear.",
        "Price": "35.55"
    }

    return (
        <>
            <cartContext.Provider value={product}>
                {props.children}
            </cartContext.Provider>
        </>
    )
}

export default CartState;
