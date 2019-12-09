import React from 'react';
import './styles.css';

export const Button = ({ label, handleClick }) => {
    return (
        <button className="btn" onClick={handleClick}>
            {label}
        </button>
    )
}
