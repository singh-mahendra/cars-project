import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CarsListItem = (props) =>{
    return (
        <section className="car-list-item">
            <aside>
                <img src={props.pictureUrl} width="100" height="100"></img>
            </aside>
            <content>
                <div>
                    <h3 className="car-list-item-header">{props.manufacturerName} - {props.modelName}</h3>
                </div>
                <div className="car-list-detail">
                    <span>Stock # {props.stockNumber} - {props.mileage.number} {props.mileage.unit} - {props.fuelType} - {props.color}</span>
                </div>
                <Link to="/detail" onClick={props.onClick} id={props.id}>More Details</Link>
            </content>
        </section>
    )
}

CarsListItem.propTypes = {
    manufacturerName: PropTypes.string,
    id: PropTypes.number,
    onClick: PropTypes.func,
    pictureUrl: PropTypes.string,
    modelName: PropTypes.string,
    mileage: PropTypes.object
}

export default CarsListItem;