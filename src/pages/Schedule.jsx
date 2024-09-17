import React, { useState, useEffect } from 'react'
import './schedule.css'
import Cards from '../components/Cards';
function Schedule() {

  const filterList = [
    {
      _id: 1,
      name: 'All',
      active: true,
    },
    {
      _id: 2,
      name: 'Romance',
      active: false,
    },
    {
      _id: 3,
      name: 'Action',
      active: false,
    },
    {
      _id: 4,
      name: 'Thriller',
      active: false,
    },
    {
      _id: 5,
      name: 'Horror',
      active: false,
    },
    {
      _id: 6,
      name: 'Adventure',
      active: false,
    },
  ]

  const [data, setData] = useState([])
  const [movies, setMovies] = useState([])
  const [filters, setFilters] = useState(filterList)




  const fetchData = async () => {
    try {
      const api = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/movieData.json`);
      const data = await api.json();
      setData(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    setMovies(data)
  }, [data])

  const handleFilterMovies = category => {

    setFilters(
      filters.map(filter => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true
        }
        return filter
      })
    )

    if (category === 'All') {
      setMovies(data)
      return
    }
    const filteredMovies = data.filter(movie => movie.category === category)
    setMovies(filteredMovies)
  }


  return (
    <section id="schedule" className='schedule'>
      <div className="container-fluid">
        <div className="row">
          <h4 className='section-title'>Opening This Week</h4>
        </div>
        <div className="row">
          <ul className="filters">
            {
              filters.map(filter => (
                <li key={filter._id} className={`${filter.active ? 'active' : undefined}`}
                  onClick={() => { handleFilterMovies(filter.name) }}
                >
                  {filter.name}
                </li>
              ))
            }
          </ul>

        </div>
        <div className="row mt-5">
          {movies && movies.length > 0 &&
            movies.map(movie =>
              <Cards key={movie._id} movie={movie} />
            )
          }
        </div>
      </div>
    </section>
  )

}

export default Schedule
