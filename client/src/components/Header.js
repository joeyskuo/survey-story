import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Google OAuth Login</a></li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav style={{'background-color': '#0b6b64'}}>
                <div className="nav-wrapper" >
                    <Link
                        className="left brand-logo"
                        style={{ margin: '0 20px' }}
                        to={this.props.auth ? '/surveys' : '/'}
                    >
                        SurveyStory
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps)(Header);