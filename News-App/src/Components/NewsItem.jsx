import React from 'react'
import image from '../assets/news.jpg'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-4 px-2 py-2 text-justify ml-5" style={{maxWidth: "370px"}}>
  <img src={src?src:image} style={{width:"350px", height:"200px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90): "News provides up-to-date information offering insights into various topics such as politics, economics"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem

