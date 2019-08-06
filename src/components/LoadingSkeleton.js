import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types';

const LoadingSkeleton = (props) => {
    const [selectedKey, updateSelectedKey] = useState("None");
    const setSelectedKey = useCallback((event) => {
        const value = event.target.getAttribute("data-value");
        const displayValue = event.target.getAttribute("display-value");
        const updatedValue = displayValue ? displayValue : value;
        updateSelectedKey(updatedValue);
        props.onSelect(value);
    }, []);


    return(
        <div>
            <figure className="card-image loading"></figure>
            <div className="card-detail">
                <h3 className="card-title loading"></h3>
                <p className="card-description loading"></p>
            </div>
        </div>
    )
}

LoadingSkeleton.propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
    itemComponent: PropTypes.func
}

export default LoadingSkeleton;