import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CarsListItem = (props) =>{
    return (
        <div>
            <Link to="/detail" onClick={props.onClick} id={props.id}>{props.manufacturerName}</Link>
        </div>
    )
}

CarsListItem.propTypes = {
    manufacturerName: PropTypes.string,
    id: PropTypes.number,
    onClick: PropTypes.func
}

export default CarsListItem;