import React from 'react';
import logo from '../assets/logo.svg'
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div className='navbar__logo'
                initial={{
                x: 500,
                opacity: 0,
                slace: 0.5,
            }}
            animate={{
                x: 0,
                opacity: 1,
                slace: 1,
            }}
            transition={{
                duration: 1.5,
            }}
            >
            <img src={logo} alt='logo' className='logo'/>
        </motion.div>
    );
}

export default Logo;
