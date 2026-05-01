import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const animations = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 10 },
    exit: { opacity: 0, x: -10 },
};

export const AnimatedPage = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
            {children}
        </motion.div>
    );
};