import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

import CarsList from './CarsList';
import Paginator from '../components/Paginator';
import Sorter from '../components/Sorter';
import Filterer from '../components/Filterer';
import * as actionTypes from '../actions/types';

const ListPage = ({...props}) => {
    const [currentPage, updateCurrentPage] = useState(1);

    const navigateToPage = (pageNumber)=> ()=>{
        const isAscending = true;

        if(pageNumber > 0 && pageNumber <= props.totalPages){
            updateCurrentPage(pageNumber);
            props.getAllCars({
                isAscending,
                currentPage
            });
        }
    }

    const sortItems = (isAscending) => {
        props.getAllCars({
            isAscending,
            currentPage
        });
    }

    const filterItems = (manufaturerName, color) => {
        const isAscending = true;
        props.getAllCars({
            isAscending,
            currentPage,
            manufaturerName,
            color
        });
    }

    const selectCar = (selectedCarId) => {
        props.setSelectedCar(selectedCarId)
    }

    useEffect(() => {
        const isAscending = true;
        props.getAllCars({
            currentPage,
            isAscending
        });
        props.getAllManufacturers();
        props.getAllColors();
    }, []);
    
    return(
        <>
        {props.totalPageCount}: {props.totalCarsCount}
        <Sorter sortItems={sortItems}></Sorter>
        <Filterer allManufacturers={props.allManufacturers} allColors={props.allColors} setFilterValues={filterItems}></Filterer>
        <CarsList listItems={props.cars} onSelectCar={selectCar}></CarsList>
        <Paginator navigateToPage={navigateToPage} currentPage={currentPage} totalPages={props.totalPages}></Paginator>
        </>
    );
}

const mapStateToProps = (state) =>({
    cars: state.cars.cars,
    totalPageCount: state.cars.totalPageCount,
    totalCarsCount: state.cars.totalCarsCount,
    totalPages: state.cars.totalPages,
    allManufacturers: state.manufacturers.allManufacturers,
    allColors: state.colors.allColors
});

const mapDispatchToProps = (dispatch, state) => ({
    getAllCars: (payload) => dispatch({type: actionTypes.GET_ALL_CARS, payload}),
    getAllManufacturers: (payload) => dispatch({type: actionTypes.GET_ALL_MANUFACTURERS, payload}),
    getAllColors: (payload) => dispatch({type: actionTypes.GET_ALL_COLORS, payload}),
    setSelectedCar: (selectedCarId) => dispatch({type: actionTypes.SELECT_CAR, selectedCarId})
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)