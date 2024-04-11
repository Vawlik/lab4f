import React from 'react';
import './css/Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={"https://cdn-icons-png.flaticon.com/512/181/181825.png"} alt={"Иконка"}/>
                <h2>PoGazam</h2>
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#/">Главная</a></li>
                    <li><a href="#/products">Товары</a></li>
                    <li><a href="#/about">О нас</a></li>
                    <li><a href="#/contact">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;