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
        if(pageNumber > 0 && pageNumber <= props.totalPages){
            updateCurrentPage(pageNumber);
        }
    }

    useEffect(() => {
        props.getAllCars();
    }, []);
    
    return(
        <>
        {props.totalPageCount}: {props.totalCarsCount}
        <Sorter></Sorter>
        <Filterer></Filterer>
        <CarsList listItems={props.cars}></CarsList>
        <Paginator navigateToPage={navigateToPage} currentPage={currentPage} totalPages={props.totalPages}></Paginator>
        </>
    );
}

const mapStateToProps = (state) =>({
    cars: state.cars.cars,
    totalPageCount: state.cars.totalPageCount,
    totalCarsCount: state.cars.totalCarsCount,
    totalPages: state.cars.totalPages
});

const mapDispatchToProps = (dispatch) => ({
    getAllCars: () => dispatch({type: actionTypes.GET_ALL_CARS})
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)