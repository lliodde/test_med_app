import React, { useState } from 'react';
import './FindDoctorSearch.css';

// The component receives an onSearch function as a prop from its parent
const FindDoctorSearch = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (e) => {
        const text = e.target.value;
        setSearchText(text);
        // Call the onSearch function from the parent every time the input changes
        onSearch(text);
    };

    return (
        <div className='finddoctor-container'>
            <div className="finddoctor-search-box">
                <input
                    type="text"
                    className="search-doctor-input-box"
                    placeholder="Search by doctor name or specialty..."
                    value={searchText}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
};

export default FindDoctorSearch;