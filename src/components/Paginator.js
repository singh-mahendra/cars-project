import React from 'react'
import PropTypes from 'prop-types';

const Paginator = (props) =>{
    
    return (
        <>
        <input type="Button" value="First" onClick={props.navigateToPage}></input>
        <input type="Button" value="Previous" onClick={props.navigateToPage}></input>
        <span>Page {props.pageNumber} of {props.totalPages}</span>
        <input type="Button" value="Next" onClick={props.navigateToPage}></input>
        <input type="Button" value="Last" onClick={props.navigateToPage}></input>
        </>
    );
}

Paginator.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Paginator;