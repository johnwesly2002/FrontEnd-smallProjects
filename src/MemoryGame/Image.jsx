import React, { useState } from 'react'

export default function Image({img, onClick, visible}) {
    console.log(img, onClick, visible)
  return (
    <div className='ImageCard' onClick={onClick}>
        {visible ? <img style={{display: 'f'}} src={img} height={200} width={300} /> : <div className="CardBack">?</div>}
    </div>
  )
}