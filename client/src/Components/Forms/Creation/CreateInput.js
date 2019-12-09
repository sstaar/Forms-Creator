import React from 'react';
import { Input } from '../../CustomUI/Input/Input';
import { Select } from '../../CustomUI/select/Select';
import { CheckBox } from '../../CustomUI/checkBox/CheckBox';
import './form.css';

export const CreateInput = ({ input, index, handleTextChange, handleRequiredChange }) => {

    const localTextChange = (event) => {
        handleTextChange(event, index);
    }

    const localRequiredChange = () => {
        handleRequiredChange(index);
    };

    return (
        <div className="form-creator-holder" key={index}>
            {/* {forms.map(item => <DisplayInput key={item.id} input={item} />)} */}
            <div className="form-creator-item">
                <Input
                    handleChange={localTextChange}
                    value={input.name}
                    name={"name"}
                    inputType={"text"}
                    label={"Name"}
                    error={null}
                />
            </div>

            <div className="form-creator-item">
                <Input
                    handleChange={localTextChange}
                    value={input.label}
                    name={"label"}
                    inputType={"text"}
                    label={"Label"}
                    error={null}
                />
            </div>

            <div className="form-creator-item">
                <Input
                    handleChange={localTextChange}
                    value={input.description}
                    name={"description"}
                    inputType={"text"}
                    label={"Description"}
                    error={null}
                />
            </div>

            <div className="form-creator-double ">
                <Select name="type" handleChange={localTextChange} options={["text", "mail"]} />
                <p>required : </p>
                <CheckBox label="required" active={input.required} handleClick={localRequiredChange} />
            </div>


            {/* <Button handleClick={addInput} label="Add Input" /> */}
            {/* <Button handleClick={creatForm} label="Create Form" /> */}
        </div>
    )
}
