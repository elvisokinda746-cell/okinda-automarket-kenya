import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    return (
        <div>
            <h1>User Dashboard</h1>
            <section>
                <h2>Your Orders</h2>
                {/* Orders will be displayed here, replace the dummy data with actual data from your API */}
                <ul>
                    <li>Order #12345 - Status: Shipped</li>
                    <li>Order #12346 - Status: Processing</li>
                    <li>Order #12347 - Status: Delivered</li>
                </ul>
            </section>
            <section>
                <h2>Your Wishlist</h2>
                {/* Wishlist will be displayed here, replace the dummy data with actual data from your API */}
                <ul>
                    <li>Product 1 <Link to='/product/1'>View</Link></li>
                    <li>Product 2 <Link to='/product/2'>View</Link></li>
                    <li>Product 3 <Link to='/product/3'>View</Link></li>
                </ul>
            </section>
        </div>
    );
};

export default DashboardPage;