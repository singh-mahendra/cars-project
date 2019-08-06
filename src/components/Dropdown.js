import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    const [selectedKey, updateSelectedKey] = useState("None");
    const setSelectedKey = useCallback((event) => {
        const value = event.target.getAttribute("data-value");
        const displayValue = event.target.getAttribute("display-value");
        const updatedValue = displayValue ? displayValue : value;
        updateSelectedKey(updatedValue);
        props.onSelect(value);
    }, []);


    return(
        <div className="dropdown">
            <button className="dropbtn">{selectedKey}</button>
            <div className="dropdown-content" onClick={setSelectedKey}>
                {
                    props.items.map((item) => {
                        return props.itemComponent(item);
                    })
                }
            </div>
        </div>
    )
}

Dropdown.propTypes = {
    items: PropTypes.array,
    onSelect: PropTypes.func,
    itemComponent: PropTypes.func
}

export default Dropdown;