import React from 'react';
import { useHistory } from 'react-router-dom';

const CartPage = () => {
    const history = useHistory();
    const [items, setItems] = React.useState([]);

    const handleCheckout = () => {
        // Handle checkout functionality here
        history.push('/checkout');
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            <ul>
                {items.length === 0 ? ( 
                    <li>Your cart is empty</li>
                ) : ( 
                    items.map((item, index) => (
                        <li key={index}>{item.name} - ${item.price}</li>
                    ))
                )}
            </ul>
            <button onClick={handleCheckout} disabled={items.length === 0}>Checkout</button>
        </div>
    );
};

export default CartPage;