import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CheckoutPage = () => {
    const [amount, setAmount] = useState('');
    const [response, setResponse] = useState(null);

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
                // Your M-Pesa payload goes here
                // This should include your credentials, amount, phone number etc.
                amount,
                // Additional configuration needed for M-Pesa integration
            }, {
                headers: {
                    'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            });
            setResponse(res.data);
        } catch (error) {
            console.error('Payment error', error);
            setResponse({ error: 'Payment failed' });
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handlePayment}>
                <input
                    type='number'
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <button type='submit'>Pay with M-Pesa</button>
            </form>
            {response && <div>{JSON.stringify(response)}</div>}
        </div>
    );
};

export default CheckoutPage;