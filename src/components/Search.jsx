import React from 'react'
import './search.css'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='search'>
      <input type="text" placeholder='Search' />
      <CiSearch  className='search-icon'/>
    </div>
  )
}

export default Search
