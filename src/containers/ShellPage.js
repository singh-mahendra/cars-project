import React, {useEffect, useState, useMemo} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";
import * as actionTypes from '../actions/types';

const ShellPage = (props) => {
    useEffect(() => {
        const isAscending = true;
        props.getAllCars({
            currentPage: 1,
            isAscending
        });
        props.getAllColors();
        props.getAllManufacturers();
    }, []);

    const getAllCars = (args) => {
        props.getAllCars(args);
    }

    return (
        <Router>
            <header className="main-header">
                <h1>Cars</h1>
            </header>
            <nav className="main-nav">
                <ul>
                    <li><a href="">Purchase</a></li>
                    <li><a href="">My Orders</a></li>
                    <li><a href="">Sell</a></li>
                </ul>
            </nav>

            <main>
                <Switch>
                    <Route path="/" exact 
                        render={(props) => <ListPage {...props} cars={props.cars} 
                        allManufacturers={props.allManufacturers} allColors={props.allColors} getAllCars={getAllCars}></ListPage>}
                        />
                    <Route path="/detail" component={DetailPage} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            
            <footer className="footer">
                Copyright
            </footer>
        </Router>
    )
}

const mapStateToProps = (state) =>({
    cars: state.cars.cars,
    allManufacturers: state.manufacturers.allManufacturers,
    allColors: state.colors.allColors
});

const mapDispatchToProps = (dispatch, state) => ({
    getAllCars: (payload) => dispatch({type: actionTypes.GET_ALL_CARS, payload}),
    getAllManufacturers: (payload) => dispatch({type: actionTypes.GET_ALL_MANUFACTURERS, payload}),
    getAllColors: (payload) => dispatch({type: actionTypes.GET_ALL_COLORS, payload}),
    setSelectedCar: (selectedCarId) => dispatch({type: actionTypes.SELECT_CAR, selectedCarId})
});

export default connect(mapStateToProps, mapDispatchToProps)(ShellPage);
