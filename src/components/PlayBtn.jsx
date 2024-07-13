import React, { useState } from 'react'
import "./playBtn.css"
import { CiPlay1 } from "react-icons/ci";
import Model from './Model';


const PlayBtn = ({ movie }) => {
  const [model, setModel] = useState(false);
  const toggleModel = () => {
    setModel(!model)
  }

  return (
    <>
      <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : ''}`}>
        <a href="#" className="playBtn" onClick={toggleModel}>
          <CiPlay1 className='play-icon' />
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && <Model movie={movie} status={model} toggleModel={toggleModel} />}
    </>
  )
}

export default PlayBtn
