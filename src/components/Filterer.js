import React from 'react'
import PropTypes from 'prop-types';

const Filterer = (props) =>{
    
    return (
        <>
        Filter by:
        Manufacurer:
        <select>
            <option key="1">Red</option>
            <option key="2">Yellow</option>
        </select>

        Color:
        <select>
            <option key="1">Red</option>
            <option key="2">Yello</option>
        </select>
        </>
    );
}

Filterer.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Filterer;