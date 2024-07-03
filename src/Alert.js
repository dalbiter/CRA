import React from 'react';

const Alert = ({ variant, children }) => {
    // creating dynamic styling, check variant prop in App.js
    const colors = {
        success: "green",
        danger: "red",
        warning: "yellow"
    }
    return (
        <div style={{ backgroundColor: colors[variant] }}>
            {children}
        </div>
    )
};

export default Alert;