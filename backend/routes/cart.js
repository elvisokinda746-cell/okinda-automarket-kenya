const express = require('express');
const router = express.Router();

let cart = [];

// Add an item to the cart
router.post('/add', (req, res) => {
    const { item } = req.body;
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart', cart });
});

// Remove an item from the cart
router.delete('/remove', (req, res) => {
    const { itemId } = req.body;
    cart = cart.filter(item => item.id !== itemId);
    res.status(200).json({ message: 'Item removed from cart', cart });
});

// Update an item in the cart
router.put('/update', (req, res) => {
    const { itemId, quantity } = req.body;
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = quantity;
        res.status(200).json({ message: 'Item updated', cart });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;