import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//This component takes a component as a prop and includes
//A route to the component if the user is connected
//If the user is not connected it redirects to the login page
export const ConnectedRoute = ({ component: Component, ...rest }) => {

    const connected = useSelector(state => state.user.connected);

    return (
        <Route {...rest} render={props => {
            if (connected === true)
                return <Component {...props} />
            else
                return <Redirect to="/login" />
        }} />
    );
}
