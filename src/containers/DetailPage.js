import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const DetailPage = (props) => {
    return (
        <>
        {props.car.modelName}
        </>
    );
}

DetailPage.propTypes = {
    car: PropTypes.object
}

const mapStateToProps = (state) =>({
    car: state.cars.selectedCar
});

const mapDispatchToProps = (dispatch, state) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);