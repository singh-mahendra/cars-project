import React, {useEffect, useState, useMemo} from 'react';
import { connect } from 'react-redux';

import CarsList from './CarsList';
import Paginator from '../components/Paginator';
import Sorter from '../components/Sorter';
import Filterer from '../components/Filterer';
import * as actionTypes from '../actions/types';

const ListPage = (props) => {
    const [currentPage, updateCurrentPage] = useState(1);
    const [sortOrder, updateSortOrder] = useState("asc");
    const [manufacturerName, updateManufacturer] = useState();
    const [color, updateColor] = useState();

    const getCars = (criteria) => {
        var args = {
            sortOrder,
            currentPage,
            manufacturerName,
            color
        };
        var mergedArgs = {...args, ...criteria};
        props.getAllCars(mergedArgs);
    }

    const navigateToPage = (pageNumber)=> ()=>{
        if(pageNumber > 0 && pageNumber <= props.totalPages){
            updateCurrentPage(pageNumber);
            getCars({pageNumber});
        }
    }

    const sortItems = (sortOrder) => {
        updateSortOrder(sortOrder);
        getCars({sortOrder});
    }

    const filterItems = (manufacturerName, color) => {
        if(manufacturerName){
            updateManufacturer(manufacturerName);
            getCars({manufacturerName});
        }
        if(color){
            updateColor(color);
            getCars({color});
        }
    }

    const selectCar = (selectedCarId) => {
        props.setSelectedCar(selectedCarId);
    }
    
    return(
        <section className="list-page">
            <aside>
                <Filterer allManufacturers={props.allManufacturers} allColors={props.allColors} updateFilterValues={filterItems}></Filterer>
            </aside>
            <section>
                <section>
                    <Sorter sortItems={sortItems} updateSortOrder={sortItems}></Sorter>
                </section>
                <section>
                    <CarsList listItems={props.cars} onSelectCar={selectCar}></CarsList>
                </section>
                <section>
                    <Paginator navigateToPage={navigateToPage} currentPage={currentPage} totalPages={props.totalPages}></Paginator>
                </section>
            </section>
        </section>
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
    setSelectedCar: (selectedCarId) => dispatch({type: actionTypes.SELECT_CAR, selectedCarId})
});

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);