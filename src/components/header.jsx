import React from 'react';
import {Link} from 'react-router-dom'
import "./header.css";

const Header = ({isLoggedIn, loggedUserId}) => {
    return (
        <div className='header'>
            <div className="container header_menu">
                <div className="nav_menu_header">
                    <Link to='/' className="logo"></Link>
                    <Link to='/' className='nav_menu_header_link_item'>Скачать игру</Link>
                    <Link to='/' className='nav_menu_header_link_item'>Новости</Link>
                    <Link to='/' className='nav_menu_header_link_item'>Медиа</Link>
                    <Link to='/' className='nav_menu_header_link_item'>Рейтинги</Link>
                    <Link to='/' className='nav_menu_header_link_item nav_menu_header_link_item_active'>Форум</Link>
                </div>
                { 
                isLoggedIn ? 
                `Привет, пользователь с id=${loggedUserId} :)`
                :
                    
                    <Link to='/login' className="authotorization_menu">
                        Уже зарегестрированы? Войти
                    </Link>
                }
                 
            </div>
        </div>
    );
}

export default Header;
