import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const DetailPage = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const getFavoriteList = () => {
        try{
            let favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
            if(!favoritesList){
                favoritesList = {};
                localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
            }
            return favoritesList;
        }catch(error){
            console.log(error);
        }
    }

    const setFavoriteList = (favoritesList) => {
        try{
            localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
        }catch(error){
            console.log(error);
        }
    }

    const setFavoriteValue = (isFavorite) => {
        let favoritesList = getFavoriteList();
        favoritesList[props.car.stockNumber] = isFavorite;
        setFavoriteList(favoritesList);
        setIsFavorite(isFavorite);
    }

    const addFavorite = () => {
        setFavoriteValue(true);
    }
    const removeFavorite = () => {
        setFavoriteValue(false);
    }

    const getFavorite = () => {
        try{
            let favoritesList = getFavoriteList();
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