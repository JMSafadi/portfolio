import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import '../styles/_settings.scss'

const MenuLinks = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#skills'>Skills</a></p>
        <p><a href='#projects'>Projects</a></p>
    </>
)

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar__menu'>
            {toggleMenu
                ? <RiCloseLine color='#fff' size={32} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color='#fff' size={32} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
                <div className='navbar__menu-container gradient__background scale-up-tr'>
                    <div className='navbar__menu-container-links'>
                        <MenuLinks/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
