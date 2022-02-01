import React from 'react'
const images = [
  {src:"/images/heading1.png"},
  {src:"/images/IMG_1289.png"},
  {src:"/images/IMG_4086.jpg"},
  {src:"/images/IMG_3966.jpg"},
]

const RandomImage = ({alt="", ...rest }) => {
  var src = images[Math.floor(Math.random()*images.length)].src;

  return (
    <img src={src} alt={alt} {...rest}/>
  )
}

export default RandomImage
