import React from 'react';
import './styles.css';

export const Input = ({
    value,
    handleChange,
    name,
    description,
    label,
    inputType
}) => {
    return (
        <div className="input-holder">
            <input type={inputType} onChange={handleChange} name={name} value={value} required className="input" />
            <label className="label">
                <span className="label-name">{label}</span>
            </label>
            <label className="description">
                {description}
            </label>
        </div>
    )
}
