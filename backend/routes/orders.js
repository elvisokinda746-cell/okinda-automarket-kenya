const express = require('express');
const router = express.Router();

// Mock data for demonstration purposes
let orders = [];

// Create a new order
router.post('/', (req, res) => {
    const newOrder = req.body;
    newOrder.id = orders.length + 1; // Simple ID assignment
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

// Get all orders
router.get('/', (req, res) => {
    res.status(200).json(orders);
});

// Get order by ID
router.get('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    res.status(200).json(order);
});

// Update an order
router.put('/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).send('Order not found');
    Object.assign(order, req.body);
    res.status(200).json(order);
});

// Delete an order
router.delete('/:id', (req, res) => {
    const orderIndex = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (orderIndex === -1) return res.status(404).send('Order not found');
    orders.splice(orderIndex, 1);
    res.status(204).send();
});

module.exports = router;