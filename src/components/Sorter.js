import React from 'react'
import PropTypes from 'prop-types';

const Sorter = (props) =>{
    const sortItems = (event) =>{
        const selectedValue = event.target.value;
        props.sortItems(selectedValue === "asc");
    }
    return (
        <>
        Sort by:
        <select onChange={sortItems}>
            <option key="1" value="asc">Ascending</option>
            <option key="2" value="desc">Descending</option>
        </select>
        </>
    );
}

Sorter.propTypes = {
}

export default Sorter;