import React, {useState} from 'react';
import PropTypes from 'prop-types';
import List from '../../components/List/';
import {connect} from 'react-redux';

import CarsListItem from '../../components/CarListItem/';
import LoadingSkeleton from '../../components/LoadingSkeleton/';

const CarsList = (props) => {
    const listItemComponent = (item) => (<CarsListItem 
        id={item.stockNumber}
        onClick = {selectCar}
        {...item}></CarsListItem>);
    
    const selectCar = (event) => {
        props.onSelectCar(event.currentTarget.getAttribute("id"));
    }

    return (
        <>
        {
            props.listItems ? 
            <List listItems={props.listItems} 
                itemComponent={listItemComponent} 
                itemKeyProperty="stockNumber"
                ></List> : 
            <LoadingSkeleton></LoadingSkeleton>
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
    
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);