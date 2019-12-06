import React from 'react';
import './styles.css';

export const Input = ({
    value,
    handleChange,
    name,
    description,
    label,
    inputType,
    error
}) => {
    console.log(error)
    return (
        <div className="input-holder">
            <input type={inputType} onChange={handleChange} name={name} value={value} required className="input" />
            <label className={error ? "label-error" : "label"} >
                <span className={error ? "label-name-error" : "label-name"} >{label}</span>
            </label>
            <label className={error ? "description-error" : "description"}>
                {error || description}
            </label>
        </div>
    )
}
