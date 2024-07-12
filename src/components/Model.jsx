import React from 'react'
import './model.css'
import { IoClose } from "react-icons/io5";

function Model() {
    return (
        <div className='movieModal'>
            <a href="#" className="modalClose"><IoClose /></a>
            <iframe width="1280" height="720" src={BiMovie.video} title={`${movie.title} | Official Trailer`} frameborder="0"
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-show'
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Model
