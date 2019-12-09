import React from 'react';
import './styles.css';

export const Select = ({ options, handleChange, name }) => {
    return (
        <div className="selector">
            <select name={name} onChange={handleChange} className="select">
                {options.map(item =>
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
        </div>
    )
}
