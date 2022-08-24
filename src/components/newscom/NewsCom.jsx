import React from 'react'
import './NewsCom.scss'
const NewsCom = ({newsItem}) => {

  const {title,image,desc} = newsItem
  console.log(image);
  return (
    <div className='news'>
      <div className="news-image" style={{backgroundImage:`url(${image})`}}>

      </div>
      <div className="news-title">
        <h3>
        {title}

        </h3>
      </div>
    </div>
  )
}

export default NewsCom
