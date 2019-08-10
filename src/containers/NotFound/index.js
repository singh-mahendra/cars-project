import React from 'react';

const NotFound = ({location}) => {
    return(
        <div className="not-found-page">
            <h1>404 - Not Found </h1>
            <p>
            <br/>
            Sorry, the page you are looking for does not exist.<br/>
            You can always go back to the <a href="/">homepage</a>.
            </p>
        </div>
    )
}

export default NotFound;