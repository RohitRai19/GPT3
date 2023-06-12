import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog1,blog2,blog3,blog4,blog5 } from './index'
const Blog = ({imageUrl}) => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-groupA">
          <Article imageUrl={blog1} date="May 26, 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container-groupB">
        <Article imageUrl={blog2} date={"May 26, 2023"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        <Article imageUrl={blog3} date={"May 26, 2023"}  title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>
        <Article imageUrl={blog4} date={"May 26, 2023"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
        <Article imageUrl={blog5} date={"May 26, 2023"} title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"} />
          </div>
      </div>
    </div>
  )
}

export default Blog
