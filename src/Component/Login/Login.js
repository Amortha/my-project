import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login">
            <h1 className="mt-5 my-3 fw-bolder" >Please <span className="text-warning">Login</span></h1>
            <div className="d-flex align-items-center justify-content-center">
                <i className="fab fa-google fa-2x mx-2"></i>
                <button type="submit" onClick={handleGoogleLogin} className="btn btn-warning runded px-5  py-2">Login With Google</button>
            </div>
            <p className="my-3 fw-bold">New to Ghurbo? <Link to="/signup"> SignUp</Link></p>
        </div>
    );
};

export default Login;