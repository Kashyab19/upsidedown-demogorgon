import React from 'react';
import { Link } from 'react-router-dom';

import {motion} from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container" 
    animate={{ opacity:1,rotateZ:180}}
    initial={{opacity:0}}>
      <motion.h2 animate={{ fontSize:50 , 
                            color:"#A6B1E1",
                            x:100
                            }
                        }>
        Welcome to Upside Down.
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{
          scale:1.5
        }}>
          Choose your alien.
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;