import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/authAction';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { LoadingScreen } from '../components/ui/LoadingScreen';


export const AppRouter = () => {


    const dispatch = useDispatch();

    const [checking, setchecking] = useState(true);
    const [isLoginIn, setisLoginIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoginIn(true);
            }
            else {
                setisLoginIn(false);
            }

            setchecking(false);
        });

    }, [dispatch, setchecking, setisLoginIn]);


    if(checking) {
        return(
             <LoadingScreen />
        );
    }



    return (

        <Router>

            <div>

                <Switch>
                    <PublicRouter
                        isAuthenticate={isLoginIn}
                        path='/auth'
                        component={AuthRouter}
                    />
                    <PrivateRouter
                        isAuthenticate={isLoginIn}
                        path='/'
                        component={JournalScreen}
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    );
};
