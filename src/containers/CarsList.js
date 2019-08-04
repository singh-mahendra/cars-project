import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import {connect} from 'react-redux';
import * as actionTypes from '../actions/types';

const CarsList = (props) => {
    const listItemComponent = (item) => <div>{item.manufacturerName}</div>;
    return (
        <>
        <input type="button" value="Get Cars" onClick={props.getAllCars}></input>
        {
            props.listItems ? 
            <List listItems={props.listItems} itemComponent={listItemComponent} itemKeyProperty="stockNumber"></List> : 
            <span>No results</span>
        }
        
        </>
    )
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