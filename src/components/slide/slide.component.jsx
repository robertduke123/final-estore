import React from 'react'
import './slide.styles.scss'

const Slide = ({category}) => {
  const {id, title, imageUrl, route} = category

  return (
    <div className='slide-container' style={{backgroundImage: `url(${imageUrl})`, left: `${(id - 1) * 100}%` }}>
      <div className="slide-cover"></div>
      <h2>{title}</h2>
    </div>
  )
}

export default Slide
