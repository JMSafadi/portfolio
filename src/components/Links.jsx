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
            <p><a href='#home'>Home</a></p>
            <p><a href='#about'>About</a></p>
            <p><a href='#skills'>Technologies</a></p>
            <p><a href='#projects'>My projects</a></p>
            <p><a href='#whyMe'>Why me?</a></p>
        </motion.div>
    );
}

export default Links;