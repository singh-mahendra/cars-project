import React from 'react'
import PropTypes from 'prop-types';

const Sorter = (props) =>{
    
    return (
        <>
        Sort by:
        <datalist>
            <option value="Name">NameDesc</option>
        </datalist>
        </>
    );
}

Sorter.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Sorter;