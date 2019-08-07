import React from 'react'
import PropTypes from 'prop-types';

const Paginator = (props) =>{
    
    return (
        <section className="paginator">
            <a href="#" onClick={props.navigateToPage(1)}>First</a>
            <a href="#" onClick={props.navigateToPage(props.currentPage - 1)}>Previous</a>
            <span>Page {props.currentPage} of {props.totalPages}</span>
            <a href="#" onClick={props.navigateToPage(props.currentPage + 1)}>Next</a>
            <a href="#" onClick={props.navigateToPage(props.totalPages)}>Last</a>
        </section>
    );
}

Paginator.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Paginator;