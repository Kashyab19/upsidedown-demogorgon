import React from 'react';
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
      mass:0.1,
      damping:4,
      when:"beforeChildren",
      staggerChildren:0.4
    }
  }
}

const childVariants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
    variants = {containerVariants}
    initial="hidden"
    animate="visible">

      <h2><span role="img">You have entered the Civilisation successfully 😊</span></h2>
      <motion.p variants={childVariants}>Your Avatar is {pizza.base} and you will be entering following planets:</motion.p>
      <motion.div
      variants={childVariants}>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;