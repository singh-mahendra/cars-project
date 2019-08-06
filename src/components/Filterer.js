import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Filterer = (props) =>{
    

    const setManufacturerFilter = (event) => {
        props.updateFilterValues(event.target.value, null);
    }

    const setColorFilter = (event) => {
        props.updateFilterValues(null, event.target.value);
    }
    return (
        <section className="filter-box">
            <h3>Filter by</h3>
            <div>
                <label htmlFor="manufacturer">Manufacurer</label>
                <select onChange = {setManufacturerFilter}>
                {
                    props.allManufacturers.map((manufacturer) => {
                        return <option key={manufacturer.name}>{manufacturer.name}</option>
                    })
                }
                </select>
            </div>
            <div>
                <label htmlFor="color">Color</label>
                <select onChange = {setColorFilter}>
                {
                    props.allColors.map((color) => {
                        return <option key={color}>{color}</option>
                    })
                }
                </select>
            </div>
        </section>
    );
}

Filterer.propTypes = {
    pageNumber: PropTypes.number,
    totalPages: PropTypes.number,
    navigateToPage: PropTypes.func
}

export default Filterer;