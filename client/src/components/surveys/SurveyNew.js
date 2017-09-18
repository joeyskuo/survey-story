import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReviewForm from './SurveyReviewForm';
import '../css/_survey.css';
import '../css/_header.css';
class SurveyNew extends Component {

    state = { showReviewForm: false };

    renderContent() {
        if(this.state.showReviewForm) {
            return <SurveyReviewForm
                onCancel={() => this.setState({ showReviewForm: false })}
            />;
        }
        return <SurveyForm
                onSurveySubmit={() => this.setState({ showReviewForm: true })}
        />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);