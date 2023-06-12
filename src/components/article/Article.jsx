import React from 'react'
import './article.css'
const   Article = ({imageUrl,date,title}) => {
  return (
    <div className='gpt3__blog-container_article'>
<div className='gpt3__blog-container_article-image'>
  <img src={imageUrl} alt="blog" />
  </div> 
  <div className="gpt3__blog-container_article-content">
    <div><p>{date}</p>
    <h1>{title}</h1></div>
  
    </div>  
    <p>Read Full Arcticle</p>
    <div>

    </div>
 </div>
  )
}

export default Article
