import React from 'react'

const InfoCard = ({ title, description, direction}) => {
  return (
    <article className="info-card">
      {title && <p>{title}</p>}
      {description && <h1>{description}</h1>}   
    </article>
  )
}

export default InfoCard
