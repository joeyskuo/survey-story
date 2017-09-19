import React from 'react';
import './css/_login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section>
            <div className="login-box">
                <p>Log in to SurveyStory using...</p>
                <div>
                    <a href="/auth/google"><i className="fa fa-google-plus" ></i></a>
                    <a href=""><i className="fa fa-twitter"></i></a>
                    <a href=""><i className="fa fa-facebook"></i></a>
                </div>
                <p>or use your email...</p>
                <input id="email" className="login login-email" type="text" placeholder="Email Address" onClick={clearEmail}/>
                <input id="password" className="login login-password" type="text" placeholder="Password" onClick={clearPass}/>
                <a href="" className="btn-login">Log in to SurveyStory</a>

            </div>
        </section>
    );

    function clearEmail() {
        document.getElementById('email').placeholder = '';
    }

    function clearPass() {
        document.getElementById('password').placeholder = '';
    }
};

export default Login;