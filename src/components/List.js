import React from 'react';
import PropTypes from 'prop-types';

const List = (props) =>{
    return (
        <ul>
            {
                props.listItems && props.listItems.length ?
                    props.listItems.map((listItem) => {
                    return (<li key={listItem[props.itemKeyProperty]}>{props.itemComponent(listItem)}</li>);
                    })
                    : "No results match your criteria."
        }
        </ul>
    )
}

List.propTypes = {
    listItems: PropTypes.array,
    itemKeyProperty: PropTypes.string,
    itemComponent: PropTypes.func
}

export default List;