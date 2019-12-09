import React, { useState } from 'react';
import { DisplayInput } from './DisplayInput';
import Axios from 'axios';

export const CreateForm = () => {
    const [forms, setForms] = useState([]);

    const [input, setInput] = useState({
        name: '',
        type: '',
        label: '',
        description: '',
        required: false,
        id: Date.now()
    });

    const handleTextChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    const handleRequiredChange = (e) => {
        setInput({ ...input, required: !input.required })
    }

    const addInput = () => {
        setForms([...forms, input]);
        setInput({
            name: '',
            type: '',
            label: '',
            description: '',
            required: false,
            id: Date.now()
        })
    }

    const creatForm = async () => {
        const response = await Axios.post('/api/form', { structure: forms, name: Date.now() });
        console.log(response);
    }

    console.log(forms);
    console.log(input);

    return (
        <div>
            {forms.map(item => <DisplayInput key={item.id} input={item} />)}
            <div>
                Name:
                <input
                    name="name"
                    value={input.name}
                    onChange={handleTextChange}
                />

                Label
                <input
                    name="label"
                    value={input.label}
                    onChange={handleTextChange}
                />

                Description
                <input
                    name="description"
                    value={input.description}
                    onChange={handleTextChange}
                />

                <select name="type" value={input.type} onChange={handleTextChange}>
                    <option value="mail">Mail</option>
                    <option value="text">Text</option>
                </select>

                <input type="checkbox" value="Required" onClick={handleRequiredChange} />

                <button onClick={addInput} >Add Input </button>
            </div>
            <button onClick={creatForm} >Create Form</button>
        </div>
    )
}
