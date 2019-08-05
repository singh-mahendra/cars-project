import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const DetailPage = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorite = () => {
        try{
            let favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
            if(!favoritesList){
                favoritesList = {};
            }
            favoritesList[props.car.stockNumber] = true;
            localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
            setIsFavorite(true);
        }
        catch(parseException){
            console.log("Localstorage favoritesList could not be parsed");
        }
    }
    const removeFavorite = () => {
        try{
            let favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
            if(!favoritesList){
                favoritesList = {};
            }
            favoritesList[props.car.stockNumber] = false;
            localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
            setIsFavorite(false);
        }
        catch(parseException){
            console.log("Localstorage favoritesList could not be parsed");
        }
    }

    const getFavorite = () => {
        try{
            let favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
            if(favoritesList && favoritesList[props.car.stockNumber]){
                setIsFavorite(true);
                return;
            }
            setIsFavorite(false);
        }
        catch(parseException){
            console.log("Localstorage favoritesList could not be parsed");
        }
    }

    useEffect(() => {
        getFavorite();
    },[]);

    return (
        <section>
            <aside>
                <img src={props.car.pictureUrl} width="100" height="100"></img>
            </aside>
            <content>
                <div>
                    <h4>{props.car.manufacturerName} - {props.car.modelName}</h4>
                </div>
                <div>
                    <span>Stock # {props.car.stockNumber} - {props.car.mileage.number} {props.car.mileage.unit} - {props.car.fuelType} - {props.car.color}</span>
                </div>
                {
                    !isFavorite ? <input type="button" onClick={addFavorite} value="Save"></input> :
                    <input type="button" onClick={removeFavorite} value="Remove"></input>
                }
            </content>
        </section>
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