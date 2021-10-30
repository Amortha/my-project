import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

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
        <div>
            <h1 className="mt-5 my-3" >Please Login</h1>
            <i className="fab fa-google fa-2x mx-2"></i><button type="submit" onClick={handleGoogleLogin}>Login With Google</button>
            <p className="my-3">new to ghurbo?<Link to="/signup">SignUp</Link></p>
        </div>
    );
};

export default Login;