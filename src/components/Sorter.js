import React from 'react'
import PropTypes from 'prop-types';

const Sorter = (props) =>{
    
    return (
        <>
        Sort by:
        <select>
            <option key="1" value="Ascending">Ascending</option>
            <option key="2" value="Descending">Descending</option>
        </select>
        </>
    );
}

Sorter.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Sorter;