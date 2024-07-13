import React from 'react'
import './Model.css'
import { IoClose } from "react-icons/io5";

function Model({ movie, toggleModel, status }) {
    return (
        <div className={`movieModel ${status ? 'active' : ''}`}>
            <a href="#" className="modelClose" onClick={toggleModel}>
                <IoClose />
            </a>
            <iframe width="1280" height="720" src={`${movie.video}?mute=1`} title={`${movie.title} | Official Trailer`} frameborder="0"
                allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-show'
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Model
