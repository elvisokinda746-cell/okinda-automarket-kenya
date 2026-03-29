const express = require('express');
const router = express.Router();
const axios = require('axios');

// M-Pesa payment controller
router.post('/mpesa/payment', async (req, res) => {
    const { amount, phoneNumber } = req.body;

    if (!amount || !phoneNumber) {
        return res.status(400).json({ message: 'Amount and phone number are required.' });
    }

    try {
        // Here you would call the M-Pesa API to initiate the payment
        const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/registerurl', {
            // Payment initiation details here
        });

        return res.status(200).json(response.data);
    } catch (error) {
        console.error('Payment initiation failed:', error);
        return res.status(500).json({ message: 'Payment initiation failed' });
    }
});

module.exports = router;