import React from 'react';
import './css/_login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <header>
            <div className="hero-text-box">
                <p>Log in to SurveyStory using...</p>
                <div>
                    <a href="#" class="fa fa-facebook">facebook</a>
                    <a href="#" class="fa fa-twitter">twitter</a>
                </div>
                <p>or use your email...</p>
                <input type="text"/>
                <input type="text"/>
                <button className="btn btn-full">Log in to SurveyStory</button>
            </div>
        </header>
    )
};

export default Login;