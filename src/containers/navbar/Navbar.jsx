import React from 'react';
import Logo from '../../components/Logo';
import Menu from '../../components/Menu';
import Links from '../../components/Links';
import '../../styles/containers/_navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar section__padding' id='navbar'>
            <Logo/>
            <Links/>
            <Menu/>
        </div>
    );
}

export default Navbar;
