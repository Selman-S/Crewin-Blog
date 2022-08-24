import React from 'react'
import NewsCom from '../../components/newscom/NewsCom'
import {news} from '../../helper/data'
import './Dashboard.scss'
const Dashbord = () => {
  

  return (
    <div className="dashboard">
      <h1 className="title">News</h1>
         <div className="news-container">
          {news.map((newsItem) =>
          <NewsCom newsItem={newsItem} key={newsItem.id}/>
          )}
          </div> 

    </div>
  )
}

export default Dashbord
