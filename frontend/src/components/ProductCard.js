import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default ProductCard;
