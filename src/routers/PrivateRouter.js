import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRouter = ({isAuthenticate,component:Component,...rest}) => {
    return (
        <Route
            {...rest}
            component = {
                (props) => (
                    (isAuthenticate)
                    ? ( <Component {...props} /> )
                    : (<Redirect to='/auth' />) 
                )
            }
        />
    );
}
