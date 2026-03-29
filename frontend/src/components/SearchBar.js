import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch(query);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
                required
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;