import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav.css';
import { logout } from '../../actions/userActions';

export const NavBar = () => {

    const connected = useSelector(state => state.user.connected);

    const dispatch = useDispatch();

    const logoutButton = async () => {
        dispatch(await logout());
    }

    if (connected === true)
        return (
            <div className="navbar">
                <Link to='' >Home</Link>
                <Link to='/form' >Create a new form</Link>
                <p onClick={logoutButton}>Logout</p>
            </div>
        )
    return (
        <div className="navbar" >
            <Link to='/register' >Register</Link>
            <Link to='/login' >Login</Link>
        </div>
    )
}
