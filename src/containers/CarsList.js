import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import {connect} from 'react-redux';


import * as actionTypes from '../actions/types';
import CarsListItem from '../components/CarListItem';

const CarsList = (props) => {
    const listItemComponent = (item) => (<CarsListItem manufacturerName={item.manufacturerName}></CarsListItem>);
    
    useEffect(() => {
        console.log("rendered");
        props.getAllCars();
    }, []);
    
    return (
        <>
        {
            props.listItems ? 
            <List listItems={props.listItems} itemComponent={listItemComponent} itemKeyProperty="stockNumber"></List> : 
            <span>No results</span>
        }
        </>
    );
}

CarsList.propTypes = {
    listItems: PropTypes.array
}

const mapStateToProps = (state) =>({
    listItems: state.cars.cars
});

const mapDispatchToProps = (dispatch, state) => ({
    getAllCars: () => dispatch({type: actionTypes.GET_ALL_CARS}) 
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);