import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import CarsList from '../CarsList';
import Paginator from '../../components/Paginator';
import Sorter from '../../components/Sorter';
import Filterer from '../../components/Filterer';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import * as actionCreators from '../../actions/creators';

const ListPage = (props) => {
    const [currentPage, updateCurrentPage] = useState(1);
    const [sortOrder, updateSortOrder] = useState("asc");
    const [manufacturerName, updateManufacturer] = useState("");
    const [color, updateColor] = useState("");

    const getCars = (criteria) => {
        var args = {
            currentPage,
            manufacturerName,
            color,
            sortOrder
        };
        var mergedArgs = {...args, ...criteria};
        props.actions.getAllCars(mergedArgs);
    }

    const navigateToPage = (pageNumber)=> ()=>{
        if(pageNumber > 0 && pageNumber <= props.totalPages){
            updateCurrentPage(pageNumber);
            getCars({pageNumber});
        }
    }

    const sortItems = () => (order) => {
        updateSortOrder(order);
        getCars({sortOrder: order});
    }

    const filterItems = () => (manufacturer, color) => {
        if(manufacturer){
            updateManufacturer(manufacturer);
            getCars({manufacturerName: manufacturer});
        }
        if(color){
            updateColor(color);
            getCars({color: color});
        }
    }

    const selectCar = (selectedCarId) => {
        props.actions.setSelectedCar(selectedCarId);
    }
    
    return(
        <section className="list-page">
            <aside className="list-filters">
                <Filterer allManufacturers={props.allManufacturers} allColors={props.allColors} updateFilterValues={filterItems()}></Filterer>
            </aside>
            <section className="list-items">
                <section className="list-header">
                    <h2>Available Cars</h2>
                    <span>Showing {props.cars.length} of {props.totalCarsCount}</span>
                </section>
                <section className="list-sorter">
                    <Sorter sortItems={sortItems} updateSortOrder={sortItems()}></Sorter>
                </section>
                <section className="list-values">
                    {
                        props.isLoading ? <LoadingSkeleton></LoadingSkeleton>
                        : <CarsList listItems={props.cars} onSelectCar={selectCar}></CarsList>
                    }
                    
                </section>
                <Paginator className="list-paginator"
                 navigateToPage={navigateToPage} currentPage={currentPage} totalPages={props.totalPages}></Paginator>
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
    allColors: state.colors.allColors,
    isLoading: state.cars.isLoading
});

const mapDispatchToProps = (dispatch, state) => ({
    actions: bindActionCreators(Object.assign({}, actionCreators), dispatch)
});

ListPage.propTypes = {
    cars: PropTypes.array,
    totalPageCount: PropTypes.number,
    totalCarsCount: PropTypes.number,
    totalPages: PropTypes.number,
    allManufacturers: PropTypes.array,
    allColors: PropTypes.array,
    isLoading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);