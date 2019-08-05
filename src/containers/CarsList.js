import React from 'react';
import PropTypes from 'prop-types';
import List from '../components/List';
import {connect} from 'react-redux';

import CarsListItem from '../components/CarListItem';

const CarsList = (props) => {
    const listItemComponent = (item) => (<CarsListItem manufacturerName={item.manufacturerName}></CarsListItem>);
    
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
    
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);