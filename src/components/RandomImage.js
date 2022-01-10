import React from 'react'
const images = [
  {src:"https://www.cs.au.edu/assets/img/IMG_1289.png"},
  {src:"https://www.cs.au.edu/assets/img/IMG_4086.jpg"},
  {src:"https://www.cs.au.edu/assets/img/IMG_3966.jpg"},
]

const RandomImage = ({alt="", ...rest }) => {
  var src = images[Math.floor(Math.random()*images.length)].src;

  return (
    <img src={src} alt={alt} {...rest}/>
  )
}

export default RandomImage
