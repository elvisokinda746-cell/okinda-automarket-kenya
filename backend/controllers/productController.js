// productController.js

const Product = require('../models/Product');

/**
 * Search and filter products based on query parameters.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.searchProducts = async (req, res) => {
    try {
        const { search, category, minPrice, maxPrice } = req.query;

        let filters = {};
        if (search) {
            filters.name = { $regex: search, $options: 'i' }; // Case insensitive search
        }
        if (category) {
            filters.category = category;
        }
        if (minPrice || maxPrice) {
            filters.price = {};
            if (minPrice) filters.price.$gte = minPrice;
            if (maxPrice) filters.price.$lte = maxPrice;
        }

        const products = await Product.find(filters);
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

