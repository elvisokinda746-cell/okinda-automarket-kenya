const express = require('express');
const router = express.Router();

// Mock database
let wishlist = [];

// Get wishlist items
router.get('/', (req, res) => {
    res.json(wishlist);
});

// Add item to wishlist
router.post('/', (req, res) => {
    const { item } = req.body;
    if (!item) return res.status(400).send('Item is required');
    wishlist.push(item);
    res.status(201).json(item);
});

// Remove item from wishlist
router.delete('/:item', (req, res) => {
    const { item } = req.params;
    wishlist = wishlist.filter(w => w !== item);
    res.status(204).send();
});

module.exports = router;