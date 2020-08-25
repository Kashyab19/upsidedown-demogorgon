import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const containerVariants = {
  hidden:{
    opacity:0,
    x:'100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      delay:0.5
    }
  }
}


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['Jupiter', 'Xavyer', 'Zuke', 'Doxinor', 'Lotukeb'];

  return (
    <motion.div className="toppings container"
    variants = {containerVariants}
    initial="hidden"
    animate="visible">
      
      <h3>Step 2: Choose Planet</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)} initial={{x:'-100vw'}}
            animate={{x:0}}
            transition={{type:'spring' ,stiffness:120}}
            whileHover={{scale:1.3,color:"#FFFD98"}}>
            
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button   whileHover={{
          scale:1,
          textShadow:"0px 0px 10px rgb(255,255,255)",
          boxShadow:"0px 0px 10px rgb(255,255,255)",

          }}>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;