import React from 'react';
import './css/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} PoGazam</p>
            <p>
                Телефон: <a href="tel:+1234567890">+1 (234) 567-890</a> | Email: <a href="mailto:pogazam@yandex.com">pogazam@yandex.com</a>
            </p>
        </footer>
    );
};

export default Footer;