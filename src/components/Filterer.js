import React from 'react'
import PropTypes from 'prop-types';

const Filterer = (props) =>{
    
    return (
        <>
        Filter by:
        <datalist>
            <option value="Name">NameDesc</option>
        </datalist>
        </>
    );
}

Filterer.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Filterer;