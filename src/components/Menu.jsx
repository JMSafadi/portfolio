import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import '../styles/_settings.scss'

const MenuLinks = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#about'>About</a></p>
        {/* <p><a href='#technologies'>Technologies</a></p> */}
        <p><a href='#projects'>My projects</a></p>
        <p><a href='#whyMe'>Why me?</a></p>
    </>
)

const Menu = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar__menu'>
            {toggleMenu
                ? <RiCloseLine color='#81AFDD' size={32} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color='#81AFDD' size={32} onClick={() => setToggleMenu(true)}/>
            }
            {toggleMenu && (
                <div className='navbar__menu-container scale-up-tr'>
                    <div className='navbar__menu-container-links gradient__background'>
                        <MenuLinks/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menu;
