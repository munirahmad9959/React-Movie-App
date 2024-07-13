import React from 'react'
import './card.css'
import { IoMdAdd } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";

function Cards({ movie }) {
    return (
        <div className='col-lg-2 col-md-4 col-sm-6'>
            <div className="movie-card">
                <img src={movie.previewImg} alt="Preview Img" className='img-fluid' />
                <p>{movie.length} | {movie.category} </p>
                <div className="content">
                    <h4>{movie.title}</h4>
                    <div className="card-icons">
                        <IoMdAdd className='ion-icon'/>
                        <IoPlayOutline className='ion-icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
