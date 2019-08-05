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
                    <h4>{props.manufacturerName} - {props.modelName}</h4>
                </div>
                <div>
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
    onClick: PropTypes.func
}

export default CarsListItem;