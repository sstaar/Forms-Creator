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
        type: 'text',
        label: '',
        description: '',
        required: false,
    }]);

    const [title, setTitle] = useState('');

    const [response, setResponse] = useState({
        success: null,
        errors: {}
    })

    const addInput = () => {
        setInputs([...inputs, {
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

    const creatForm = async () => {
        try {
            const response = await Axios.post('/api/form', { structure: inputs, name: title });
            if (response.data.URL)
                return setResponse({ ...response, success: response.data.URL });
            return setResponse({ ...response, errors: { general: 'SERVER ERROR' } })
        } catch (error) {

        }
        console.log(response);
    };

    const titleChange = (event) => {
        setTitle(event.target.value);
    }

    if (response.success)
        return (
            <div className="success">
                {response.success}
            </div>
        )
    return (
        <div>
            <div className="title" >
                <Input
                    handleChange={titleChange}
                    value={title}
                    name={"title"}
                    inputType={"text"}
                    label={"Your form name"}
                    description={"Your form name must be unique"}
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
