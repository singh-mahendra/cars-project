import React from 'react';
import PropTypes from 'prop-types';

const List = (props) =>{
    return (
        <ul>
            {props.listItems.map((listItem) => {
                return (<li key={listItem[props.itemKeyProperty]}>{props.itemComponent(listItem)}</li>);
            })}
        </ul>
    )
}

List.propTypes = {
    listItems: PropTypes.array
}

export default List;