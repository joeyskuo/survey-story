import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header2 from './Header2';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';


class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header2 />
                        <Route exact path='/' component={Landing}/>
                        <Route exact path='/surveys' component={Dashboard}/>
                        <Route path='/surveys/new' component={SurveyNew}/>
                    </div>
                </BrowserRouter>
        );
    }
};

export default connect(null, actions)(App);