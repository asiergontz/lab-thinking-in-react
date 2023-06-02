import React from 'react'

function SearchBar({search, setSearch}) {

    const handleChange = (event) => {
        setSearch(event.target.value)}



  return (
    <>
    <div className="searchdiv">
        <input
          id="search-id"
          type="text"
          value={search}
          onChange={handleChange}
          placeholder='Search product'
        />
        <label for="search-id">Search</label>
      </div>
    <button type='checkbox'>Only show products in stock</button>
    </>
  )
}

export default SearchBar