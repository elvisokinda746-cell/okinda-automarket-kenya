import React from 'react';
import PropTypes from 'prop-types';

const FilterBar = ({ categories, onCategoryChange, onPriceChange, onConditionChange }) => {
    return (
        <div className="filter-bar">
            <h2>Filter Products</h2>
            <div className="filter-group">
                <label htmlFor="category">Category:</label>
                <select id="category" onChange={onCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="price">Price:</label>
                <input type="number" id="min-price" placeholder="Min Price" onChange={onPriceChange} />
                <input type="number" id="max-price" placeholder="Max Price" onChange={onPriceChange} />
            </div>
            <div className="filter-group">
                <label htmlFor="condition">Condition:</label>
                <select id="condition" onChange={onConditionChange}>
                    <option value="">All Conditions</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select>
            </div>
        </div>
    );
};

FilterBar.propTypes = {
    categories: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onPriceChange: PropTypes.func.isRequired,
    onConditionChange: PropTypes.func.isRequired,
};

export default FilterBar;