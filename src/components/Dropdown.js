import React, {useState, useCallback} from 'react'
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    const [selectedKey, updateSelectedKey] = useState("None");
    const [visibleClass, updateVisibleClass] = useState("hidden");

    const setSelectedKey = useCallback((event) => {
        const value = event.target.getAttribute("data-value");
        const displayValue = event.target.getAttribute("display-value");
        const updatedValue = displayValue ? displayValue : value;
        updateSelectedKey(updatedValue);
        updateVisibleClass("hidden");
        props.onSelect(value);
    }, []);

    const showDropdownList = () => {
        visibleClass === "hidden" ? updateVisibleClass("visible") : updateVisibleClass("hidden");
    }
    return(
        <div className="dropdown">
            <button className="dropbtn" onClick={showDropdownList}>{selectedKey}</button>
            <div className={`dropdown-content ${visibleClass}`} onClick={setSelectedKey}>
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