import {Link} from "react-router-dom";
import '../CommonStyles/CommonStyles.css';
import './Header.css';
import React, {useState} from 'react';


function Header() {

    const[hide, setHide] = useState('none');

    function switchVisibleMenu(){
        (hide === 'none') ? setHide('block') : setHide('none');
    }



    return (
        <div>
            <header className="header">
                <div className="header__container container">
                    <div className='header__wrapper flex'>
                        <div className="header__logo" id="logo">
                            <Link to={'/'} className="link link_logo">
                                <picture>
                                    <source media="(max-width: 520px)" srcSet='/images/pink.svg'/>
                                    <source media="(min-width: 321px)" srcSet="/images/logotype-white-desktop.svg"/>
                                    <img src="../../images/logotype-white-desktop.svg"
                                         alt="Логотип 'Очки'"/>
                                </picture>
                            </Link>
                        </div>
                        <div className="nav flex">
                            <ul className="nav__list flex">
                                <li className="nav__item">
                                    <Link to={'/'} className="link nav__link">Главная</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to={'photo'} className="link nav__link">Фотографии</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to={'form'} className="link nav__link">Конкурс</Link>
                                </li>
                                <li className="nav__item">
                                    <a className="link nav__link" href="https://htmlacademy.ru" target="_blank"
                                                             rel="noopener noreferrer">HTML Academy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="burger flex" onClick={switchVisibleMenu}>
                            <span className="burger__elem"/>
                            <span className="burger__elem"/>
                            <span className="burger__elem"/>
                        </div>
                        <div className="nav nav_device" style={{display: hide}}>
                            <div className="header__wrapper-device flex">
                                <div className="header__logo-device">
                                <Link to={'/'} className="link link_logo">
                                        <picture>
                                            <source media="(max-width: 580px)" srcSet="/images/pink.svg"/>
                                            <source media="(min-width: 321px)"
                                                    srcSet="/images/logotype-white-desktop.svg"/>
                                            <img src="/images/logotype-white-desktop.svg" alt="Логотип 'Очки'"/>
                                        </picture>
                                    </Link>
                                </div>
                                <div className="nav__close">
                                    <button className="nav__close__btn" onClick={switchVisibleMenu}>
                                        <span className="nav__close__btn__span-left"/>
                                        <span className="nav__close__btn__span-right"/>
                                    </button>
                                </div>
                            </div>
                            <ul className="nav__list nav__list_device" >
                                <li className="nav__item nav__item_device">
                                    <Link to={'/'} className="link nav__link nav__link_device">Главная</Link>
                                </li>
                                <li className="nav__item nav__item_device">
                                    <Link to={'photo'} className="link nav__link nav__link_device">Фотографии</Link>
                                </li>
                                <li className="nav__item nav__item_device">
                                    <Link to={'form'} className="link nav__link nav__link_device">Конкурс</Link>
                                </li>
                                <li className="nav__item nav__item_device"><a
                                    className="link nav__link nav__link_device" href="https://htmlacademy.ru" target="_blank"
                                    rel="noopener noreferrer">HTML Academy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
