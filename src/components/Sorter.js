import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const Sorter = (props) =>{
    const [sortOrder, updateSortOrder] = useState("asc");

    const sortItems = [
        {key :"1", value: "asc", name: "Mileage : Low to High"},
        {key :"2", value: "desc", name: "Mileage : High to Low"},
    ];
    
    const getListItem = (item) => {
        return <a href="#" key={item.key} data-value={item.value} display-value={item.name}>{item.name}</a>;
    }

    const setColorFilter = () => (value) => {
        updateSortOrder(value)
        props.updateSortOrder(value);
    }

    return (
        <>
        Sort by:
            <Dropdown items={sortItems} itemComponent={getListItem} onSelect={setColorFilter()}></Dropdown>
        </>
    );
}

Sorter.propTypes = {
    updateSortOrder: PropTypes.func
}

export default Sorter;