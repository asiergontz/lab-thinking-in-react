import React from 'react'

function SearchBar({search, setSearch, check, setCheck}) {

    const handleChange = (event) => {
        setSearch(event.target.value)}

    const handleCheck = (event) => {
        setCheck(!check)}


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
      </div>
    <input type="checkbox" 
    onChange={handleCheck} 
    value={check}/>
    <label>Only products on stock</label>
    </>
  )
}

export default SearchBar