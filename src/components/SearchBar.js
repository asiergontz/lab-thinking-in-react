import React from 'react'

function SearchBar() {
  return (
    <div>
    <form action="POST">
        <input type="text" name="search" placeholder="Search products" />
    </form>
    <button type='checkbox'>Only show products in stock</button>
    </div>
  )
}

export default SearchBar