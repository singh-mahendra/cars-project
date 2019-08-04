import React from 'react';
import PropTypes from 'prop-types';

const CarsListItem = (props) =>{
    return (
        <div>
            {props.manufacturerName}
        </div>
    )
}

CarsListItem.propTypes = {
    listItems: PropTypes.array
}

export default CarsListItem;