import React, { useState, useEffect } from 'react';
import './banner.css';
import MovieContent from '../components/MovieContent';
import MovieDate from '../components/MovieDate';
import PlayBtn from '../components/PlayBtn';
import MovieSwiper from '../components/MovieSwiper';

const Banner = () => {
    const [movies, setMovies] = useState([]);

    const fetchData = async () => {
        try {
            const api = await fetch('http://localhost:5173/data/movieData.json');
            const data = await api.json();
            setMovies(data);
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }

    };


    useEffect(() => {
        fetchData();

    }, []);

    const handleSlideChange = (id) => {
        console.log(`id is: ${id}`)
    }


    return (
        <div className='banner'>
            {
                movies && movies.length > 0 && movies.map(movie => {
                    return (
                        <div className="movie">
                            <img src={movie.bgImg}
                                alt="Background Image"
                                className={`bgImg ${movie.active ? 'active' : undefined}`}
                            />
                            <div className="container-fluid d-flex justify-content-center">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <MovieContent movie={movie} />
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <MovieDate movie={movie} />
                                        <PlayBtn movie={movie} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
            {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange} />}
        </div>
    );
};

export default Banner;
