import React, { useEffect, useState } from 'react';
import style from './Header.module.scss';
import logo from '../../files/images/logo.png';

const Header = (props) =>{
    const [active, setActive] = useState(1)

    const navBar = [
        {
            id:1,
            name: 'about'
        },
        {
            id:2,
            name: 'services'
        },
        {
            id:3,
            name: 'projects'
        }
    ]

    return (
        <div className={style.header}>
            <div className={style.header__Wrapper}>
                <img className={style.headerLogo} src={logo} alt=""/>
                <nav>
                    {navBar.map(links => <a key={links.id} className={active === links.id ? style.headerActive : ''} href="#" 
                    onClick={() => setActive(links.id)}>{links.name}</a>)}
                </nav>
            </div>
            <div>
                <span className={style.headerLanguage}>EN RU</span>
            </div>
        </div>
    )
}

export default Header;