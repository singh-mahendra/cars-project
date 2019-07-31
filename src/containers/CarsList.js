import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
const CarsList = (props) => {
    const listItems = ["Audi", "Mercedes"]
    return (
        <List listItems={listItems}></List>
    )
}

CarsList.propTypes = {

}

export default CarsList;