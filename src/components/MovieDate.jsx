import React from 'react'
import "./movieDate.css"

const MovieDate = ({movie}) => {
  return (
    <div className={`date ${movie.active ? 'active' : ''}`}>
      <h2>{movie.date}</h2>
    </div>
  )
}

export default MovieDate
