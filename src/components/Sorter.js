import React from 'react'
import PropTypes from 'prop-types';

const Sorter = (props) =>{
    const sortItems = (event) =>{
        props.updateSortOrder(event.target.value);
    }

    return (
        <>
        Sort by:
        <select onChange={sortItems}>
            <option key="1" value="asc">Mileage : Low to High</option>
            <option key="2" value="desc">Mileage : High to Low</option>
        </select>
        </>
    );
}

Sorter.propTypes = {
}

export default Sorter;