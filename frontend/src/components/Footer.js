import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>Okinda Automarket Kenya</h4>
                <p>&copy; {new Date().getFullYear()} Okinda Automarket. All Rights Reserved.</p>
                <p>Contact us: <a href="mailto:info@okindaautomarket.co.ke">info@okindaautomarket.co.ke</a></p>
            </div>
        </footer>
    );
};

export default Footer;