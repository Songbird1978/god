import React from 'react';
import { ArrowFatUp } from "@phosphor-icons/react";
import '../backToTop/backToTop.css';
import { motion } from 'framer-motion';


function BackToTop() {

    return (

        <motion.div className="backToTopDiv"
            onClick={() => window.location.replace("/")}
            style={{ scrollBehaviour: "smooth" }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
        >
            <ArrowFatUp size={60} weight="fill" label="Scroll to Top" className="topIcon" />

        </motion.div>
    )
}

export default BackToTop;