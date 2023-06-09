import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
    const handleChange = (event) => {
        handleSearchNote(event.target.value)
    }
    return (
        <div className='search'>
            <MdSearch className='search-icons' size="1.3rem" />
            <input 
                onChange={handleChange}
                type="text" 
                placeholder='Type to search' 
            />
        </div>
    )
}

export default Search