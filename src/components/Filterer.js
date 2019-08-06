import React from 'react'
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const Filterer = (props) =>{
    const setManufacturerFilter = (value) => {
        props.updateFilterValues(value, null);
    }

    const setColorFilter = (value) => {
        props.updateFilterValues(null, value);
    }

    const getManufacturerItem = (item) => {
        return <a href="#" key={item.name} data-value={item.name}>{item.name}</a>
    }

    const getColorItem = (item) => {
        return <a href="#" key={item} data-value={item} >{item}</a>
    }

    return (
        <section className="filter-box">
            <h3>Filter by</h3>
            <div>
                <label htmlFor="manufacturer">Manufacurer</label>
                <Dropdown items={props.allManufacturers} itemComponent={getManufacturerItem} onSelect={setManufacturerFilter}></Dropdown>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <Dropdown items={props.allColors} itemComponent={getColorItem} onSelect={setColorFilter}></Dropdown>
            </div>
        </section>
    );
}

Filterer.propTypes = {
    allColors: PropTypes.array,
    allManufacturers: PropTypes.array,
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Filterer;