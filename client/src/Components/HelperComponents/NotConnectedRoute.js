import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//This component takes a component as a prop and includes
//A route to the component if the user is not connected
//If the user is connected it redirects to the home page
export const NotConnectedRoute = ({ component: Component, ...rest }) => {

    const connected = useSelector(state => state.user.connected);

    return (
        <Route {...rest} render={props => {
            if (connected === false)
                return <Component {...props} />
            else
                return <Redirect to="/profile" />
        }} />
    );
}
