import React from 'react';

const HomePage = () => {
    const featuredProducts = [
        { id: 1, name: 'Product 1', price: '100$', image: 'image1.jpg' },
        { id: 2, name: 'Product 2', price: '200$', image: 'image2.jpg' },
        { id: 3, name: 'Product 3', price: '300$', image: 'image3.jpg' },
    ];

    return (
        <div>
            <h1>Featured Products</h1>
            <div className="product-list">
                {featuredProducts.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;