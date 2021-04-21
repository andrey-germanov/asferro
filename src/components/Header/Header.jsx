import React from 'react';
import style from './Header.module.scss';
import logo from '../../files/images/logo.png';

const Header = (props) =>{
    return (
        <div className={style.header}>
            <div className={style.header__Wrapper}>
                <img className={style.headerLogo} src={logo} alt=""/>
                <nav>
                    <a href="">about</a>
                    <a className={style.headerActive} href="">services</a>
                    <a href="">projects</a>
                </nav>
            </div>
            <div>
                <span className={style.headerLanguage}>EN RU</span>
            </div>
        </div>
    )
}

export default Header;