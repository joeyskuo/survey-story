import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/_navbar.css';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Navbar extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li><Link to="/" >Home</Link></li>,
                    <li><Link to="/features" >Features</Link></li>,
                    <li><Link to="/plans" >Pricing</Link></li>,
                    <li><Link to="/surveys/new" >Demo</Link></li>,
                    <li><Link to="/login">Log in</Link></li>
                ];
            default:
                return [
                    <li><Link to="#" >Dashboard</Link></li>,
                    <li><Link to="#" >Surveys</Link></li>,
                    <li><Link to="#" >Responses</Link></li>,
                    <li key="1"><Payments/></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    };

    render() {
        return (
            <nav>
                <div className="row">
                    <ul className="main-nav">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
};


function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Navbar);
