import React from 'react';
import { Link } from 'react-router-dom';

import {motion} from "framer-motion";

const buttonVariant = {
  animation:{
    scale:0.75
  },
 hover:{
    scale:[1,1.1,1,1.1,1,1.1,1],
  
    textShadow:"0px 0px 10px rgb(255,255,255)",
    boxShadow:"0px 0px 10px rgb(255,255,255)",
 }
}


const Home = () => {
  return (
    <motion.div className="home container" 
    animate={{ opacity:1}}
    initial={{opacity:0}}
    transition={{delay:0.1,duration:2}}>
      <motion.h2 animate={{ fontSize:50 ,  color:"#A6B1E1",  x:100,rotateZ:180 } }>
        Welcome to Upside Down.
      </motion.h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariant}
        whileHover="hover"
        animate="animation">
          Choose your alien.
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;