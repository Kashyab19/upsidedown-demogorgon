import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const Base = ({ addBase, pizza }) => {
  const bases = ['Demogorgon', 'Tanurmon', 'Crustorgon'];

  return (
    <div className="base container">

      <h3>Step 1: Choose Your Avatar</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        initial={{x:'-100vw'}}
        animate={{x:0}}>
          <Link to="/toppings">
            <motion.button>Next</motion.button>
          </Link>
        </motion.div>
      )}

    </div>
  )
}

export default Base;