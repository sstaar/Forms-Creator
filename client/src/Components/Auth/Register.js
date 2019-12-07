import React, { useState } from 'react';
import { Input } from '../CustomUI/Input/Input';
import Axios from 'axios';

const mapResponse = (response) => {
    let errors = {};
    if (response.errors && response.errors.details) {
        response.errors.details.forEach(error => {
            errors[error.context.key] = error.message;
        });
        return { errors };
    }
    else if (response.errors)
        return { errors: response.errors };
    else if (response.success)
        return { username: '', password: '', errors: {}, success: response.success };
}

export const Register = () => {

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        password: '',
        errors: {},
        success: null,
    });

    const { username, password, errors, success } = registerInfo;

    const handleChange = (event) => {
        setRegisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
    };

    const register = async () => {
        let response = await Axios.post('http://localhost:5000/api/user', { username, password });
        response = response.data;
        setRegisterInfo({ ...registerInfo, ...mapResponse(response) });
        console.log(response);
    }

    return (
        <div>
            {success && <p>{success}</p>}
            <Input
                handleChange={handleChange}
                name={"username"}
                value={username}
                inputType={"text"}
                description={"A username can contain only numbers and/or letters."}
                label={"Username"}
                error={errors.username ? errors.username : null}
            />

            <Input
                value={password}
                handleChange={handleChange}
                name={"password"}
                inputType={"password"}
                description={"Please enter a strong password."}
                label={"Password"}
                error={errors.password ? errors.password : null}
            />

            <button onClick={register} >Submit</button>

        </div>
    )
}
