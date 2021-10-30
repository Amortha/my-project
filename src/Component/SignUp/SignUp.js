import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const SignUp = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <button type="submit" onClick={handleGoogleSignUp}>Sing Up</button>
            <p>Already have an account?<Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;