import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ListPage from "./ListPage";
import DetailPage from "./DetailPage";
import NotFound from "./NotFound";
import * as actionCreators from '../actions/creators';

const ShellPage = (props) => {
    useEffect(() => {
        const isAscending = true;
        props.actions.getAllCars({
            currentPage: 1,
            isAscending
        });
        props.actions.getAllColors();
        props.actions.getAllManufacturers();
    }, []);

    const getAllCars = (args) => {
        props.actions.getAllCars(args);
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

            <main className="main-content">
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

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, actionCreators), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShellPage);
