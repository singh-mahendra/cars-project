import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Filterer = (props) =>{
    const [manufacturer, setManufacturer] = useState();
    const [color, setColor] = useState();
    const setManufacturerFilter = (event) => {
        setManufacturer(event.target.value);
        props.setFilterValues(manufacturer, color);
    }

    const setColorFilter = (event) => {
        setColor(event.target.value);
        props.setFilterValues(manufacturer, color);
    }
    return (
        <>
        Filter by:
        Manufacurer:
        <select onChange = {setManufacturerFilter}>
            {
                props.allManufacturers.map((manufacturer) => {
                    return <option key={manufacturer.name}>{manufacturer.name}</option>
                })
            }
        </select>

        Color:
        <select onChange = {setColorFilter}>
            {
                props.allColors.map((color) => {
                    return <option key={color}>{color}</option>
                })
            }
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