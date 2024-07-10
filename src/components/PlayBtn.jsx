import React from 'react'
import "./playBtn.css"
import { CiPlay1 } from "react-icons/ci";


const PlayBtn = ({ movie }) => {
  return (
    <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : ''}`}>
      <a href="#" className="playBtn"><CiPlay1 className='play-icon' /></a>
      <p>Watch Trailer</p>
    </div>
  )
}

export default PlayBtn
