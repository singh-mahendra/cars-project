import React, {} from 'react'
import PropTypes from 'prop-types';

const LoadingSkeleton = () => {
    
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