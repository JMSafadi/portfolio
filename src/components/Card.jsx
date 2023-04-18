import React from 'react'

const Card = ({ icon, title, text }) => {
  return (
    <div className='whyMe__card'>
      { icon } 
      <h3 className='whyMe__card-title'>{ title }</h3>
      <p className='whyMe__card-text'>{ text }</p>
    </div>
  )
}

export default Card