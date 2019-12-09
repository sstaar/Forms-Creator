import React, { useState } from 'react';
import { DisplayInput } from './DisplayInput';
import Axios from 'axios';
import { CheckBox } from '../../CustomUI/checkBox/CheckBox';
import { Select } from '../../CustomUI/select/Select';
import { Input } from '../../CustomUI/Input/Input';
import { Button } from '../../CustomUI/button/Button';
import './form.css';
import { CreateInput } from './CreateInput';
import { array } from 'prop-types';

export const CreateForm = () => {
    const [inputs, setInputs] = useState([{
        name: '',
        type: 'text',
        label: '',
        description: '',
        required: false,
    }]);

    const [title, setTitle] = useState('');

    const addInput = () => {
        setInputs([...inputs, {
            name: '',
            type: 'text',
            label: '',
            description: '',
            required: false,
        }])
    };


    const handleTextChange = (event, inputKey) => {
        let newInputs = inputs.map((input, key) => {
            if (key === inputKey)
                input = { ...input, [event.target.name]: event.target.value };
            return input
        });
        setInputs(newInputs);
    }

    const handleRequiredChange = (inputKey) => {
        let newInputs = inputs.map((input, key) => {
            if (key === inputKey)
                input = { ...input, required: !input.required };
            return input
        });
        setInputs(newInputs);
    };

    console.log(inputs);

    const creatForm = async () => {
        const response = await Axios.post('/api/form', { structure: inputs, name: title });
        console.log(response);
    };

    const titleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>
            <div className="title" >
                <Input
                    handleChange={titleChange}
                    value={title}
                    name={"title"}
                    inputType={"text"}
                    label={"Your form name"}
                    error={null}
                />
            </div>
            {inputs.map((input, index) =>
                <CreateInput
                    key={index}
                    index={index}
                    input={input}
                    handleTextChange={handleTextChange}
                    handleRequiredChange={handleRequiredChange}
                />
            )}
            <div className="bts">
                <Button handleClick={addInput} label={"Add field"} />
                <Button handleClick={creatForm} label="Create Form" />
            </div>

        </div>
    )
}
