import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/SearchComponent.css';

const SearchComponent = ({ searchText, onSearchChange }) => {
    const [results, setResults] = useState([]);

    // Dummy data for search results
    const dummyData = [

        { id: 1, title: 'Company Overview', link: '/company-overview' },
        { id: 2, title: 'Board of Directors', link: '/board-directors' },
        { id: 3, title: 'Organization Structure', link: '/organization-structure' },
        { id: 4, title: 'Awards and Achievements', link: '/awards-achievements' },
        { id: 5, title: 'Certificates', link: '/certificates' },
        { id: 6, title: 'Annual Reports', link: '/annual-reports' },
        { id: 7, title: 'Tenders', link: '/active-tenders' },
        { id: 8, title: 'Home', link: '/' },
    ];

    const handleSearch = (e) => {
        const query = e.target.value;
        onSearchChange(query);

        if (query) {
            const filteredResults = dummyData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Enter Your Text"
                value={searchText}
                onChange={handleSearch}
            />
            {results.length > 0 && (
                <div className="search-results">
                    {results.map(result => (
                        <Link key={result.id} to={result.link} className="search-result-item">
                            {result.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchComponent;