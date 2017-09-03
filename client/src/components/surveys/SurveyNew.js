import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReviewForm from './SurveyReviewForm';

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

export default SurveyNew;