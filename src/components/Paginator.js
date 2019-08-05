import React from 'react'
import PropTypes from 'prop-types';

const Paginator = (props) =>{
    
    return (
        <>
        <input type="Button" value="First" onClick={props.navigateToPage(1)}></input>
        <input type="Button" value="Previous" onClick={props.navigateToPage(props.currentPage - 1)}></input>
        <span>Page {props.currentPage} of {props.totalPages}</span>
        <input type="Button" value="Next" onClick={props.navigateToPage(props.currentPage + 1)}></input>
        <input type="Button" value="Last" onClick={props.navigateToPage(props.totalPages)}></input>
        </>
    );
}

Paginator.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Paginator;