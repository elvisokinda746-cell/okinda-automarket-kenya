import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>
            {/* Additional product details go here */}
        </div>
    );
};

export default ProductDetailPage;