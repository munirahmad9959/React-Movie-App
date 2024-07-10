import React from 'react'
import "./movieContent.css"
import titleImg from "../images/transformer-title.png"
import Button from './Button'
import { CiBookmark } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";


const MovieContent = ({ movie }) => {
    return (
        <div className="content">
            <img src={movie.titleImg} alt="Movie Title" className='movie-title' />
            <h4>
                <span>{movie.year}</span>
                <span><i>{movie.ageLimit}</i></span>
                <span>{movie.length}</span>
                <span>{movie.category}</span>
            </h4>
            <p>{movie.description}!</p>
            <div className="button">
                <Button icon={<CiBookmark />}
                    name="Book"
                    color="#ff3700"
                    bgColor="#fff" />

                <Button icon={<IoMdAdd />} name="My List" />
            </div>
        </div>
    )
}

export default MovieContent
