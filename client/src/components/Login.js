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
                <input className="login login-email" type="text"/>
                <input className="login login-password" type="text"/>
                <a href="" className="btn-login">Log in to SurveyStory</a>

            </div>
        </section>
    )
};

export default Login;