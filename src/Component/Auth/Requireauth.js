import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'; 
import auth from '../../firebase.init';

 

const Requireauth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if(loading){
        return <h1>loading</h1>;
    }
    if(!user){
        return <Navigate to="/login" state ={{from: location}} replace></Navigate>
    }
    
    return children;
}; 

export default Requireauth;