import React from 'react'
import './features.css'
const Features = ({title,text}) => {
  return (
    <div className='gpt3__features-container__features'>
   <div className='gpt3__features-container__features-title'>
    <div></div>
   <h1>{title}</h1>
   </div>

   <div className='gpt3__features-container__features-text'>
    <p>{text}</p>
   </div>
    </div>
  )
}

export default Features
