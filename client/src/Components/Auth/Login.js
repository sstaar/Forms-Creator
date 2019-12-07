import React, { useState } from 'react';
import { Input } from '../CustomUI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';

export const Login = () => {

    //Allows to use dispatch
    const dispatch = useDispatch();

    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
    });

    const errors = useSelector(state => state.user.errors);

    const { username, password } = loginInfo;

    const handleChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    };

    const loginButton = async () => {
        dispatch(await login(loginInfo));
    }

    return (
        <div>
            <Input
                handleChange={handleChange}
                value={username}
                name={"username"}
                inputType={"text"}
                label={"Username"}
                error={errors.username ? errors.username : null}
            />

            <Input
                handleChange={handleChange}
                value={password}
                name={"password"}
                inputType={"password"}
                label={"Password"}
                error={errors.password ? errors.password : null}
            />

            <button onClick={loginButton} >Submit</button>
        </div>
    )
}
