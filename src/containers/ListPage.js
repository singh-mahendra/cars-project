import React from 'react';
import { connect } from 'react-redux';

import CarsList from './CarsList';
import Paginator from '../components/Paginator';
import Sorter from '../components/Sorter';
import Filterer from '../components/Filterer';

const ListPage = () =>{
    return(
        <>
        <Sorter></Sorter>
        <Filterer></Filterer>
        <CarsList></CarsList>
        <Paginator></Paginator>
        </>
    )
}

const mapStateToProps = () =>{

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage)