import React from 'react'
import './whatGpt.css'
import { Features } from '../../components'

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding' id='whatgpt'>
      <div className='gpt3__whatgpt3-feature'>
           <Features/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <Features/>
      <Features/>
      <Features/>
      </div>
    </div>
  )
}

export default WhatGPT
