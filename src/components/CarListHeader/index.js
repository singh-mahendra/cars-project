import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const CarsListHeader = (props) => {
    return (
        <>
        {
            <section className="list-header">
				<h2>Available Cars</h2>
				<span>Showing {props.displayCarsCount} of {props.totalCarsCount}</span>
			</section>
        }
        </>
    );
}

CarsListHeader.propTypes = {
	displayCarsCount: PropTypes.number,
	totalCarsCount: PropTypes.number
}

const mapStateToProps = (state) =>({
});

const mapDispatchToProps = (dispatch, state) => ({
    
});

export default CarsListHeader;