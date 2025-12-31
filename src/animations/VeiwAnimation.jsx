import React, { Children } from 'react'
import {motion} from 'framer-motion'

const VeiwAnimation = ({children})=> {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true,amount:0.3}}
    
    >
      
     {children}
    </motion.div>
  )
}

export default VeiwAnimation