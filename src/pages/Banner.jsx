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
            const api = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/movieData.json`);
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
        const newMovies = movies.map((movie) => {
            movie.active = false;
            if (movie._id === id) {
                movie.active = true
            }
            return movie
        });
        setMovies(newMovies); 
    };

    return (
        <div className='banner'>
            {movies && movies.length > 0 && movies.map((movie) => (
                <div key={movie._id} className="movie">
                    <img
                        src={movie.bgImg}
                        alt="Background Image"
                        className={`bgImg ${movie.active ? 'active' : ''}`}
                    />

                    <div className="container-fluid">
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
            ))}
            {movies && movies.length > 0 && (
                <MovieSwiper slides={movies} slideChange={handleSlideChange} />
            )}
        </div>
    );
};

export default Banner;
