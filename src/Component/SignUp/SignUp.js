import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import './SignUp.css'

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
        <div className="signup">
            <h1 className="mt-5 my-3 fw-bolder" >Please <span className="text-warning">SignUP</span></h1>
            <div className="d-flex align-items-center justify-content-center">
                <i className="fab fa-google fa-2x mx-2"></i>
                <button type="submit" onClick={handleGoogleSignUp} className="btn btn-warning runded px-5  py-2">SignUp With Google</button>
            </div>
            <p className="my-3 fw-bold">Already have an account ? <Link to='/login' >Login</Link></p>
        </div>
    );
};

export default SignUp;