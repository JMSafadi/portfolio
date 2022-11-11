import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {
    return (
        <motion.div className='navbar__links'
            initial={{
                x: -500,
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
            <p><a href='#home'>Bienvenido</a></p>
            <p><a href='#about'>Sobre mi</a></p>
            <p><a href='#skills'>Tecnologias</a></p>
            <p><a href='#projects'>Mis proyectos</a></p>
        </motion.div>
    );
}

export default Links;