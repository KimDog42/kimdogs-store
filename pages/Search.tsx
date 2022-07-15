import React from 'react'
import SearchPageFunction from '../components/SearchPageFunction'
import TopBar from './../components/TopBar';

function Search() {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-900">
      <TopBar/>
        <SearchPageFunction/>
    </div>
  )
}

export default Search