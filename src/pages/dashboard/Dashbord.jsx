import React, { useContext } from 'react'
import NewsCom from '../../components/newscom/NewsCom'
import { OpenContext } from '../../context/OpenContext'
import {news} from '../../helper/data'
import './Dashboard.scss'
const Dashbord = () => {
  const { setOpen } = useContext(OpenContext);
  
  const handleClose= () => {
    setOpen(false);
  }
  return (
    <div className="dashboard" onClick={handleClose} >
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
