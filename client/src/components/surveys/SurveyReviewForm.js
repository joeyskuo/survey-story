import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import '../css/_review.css';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyReviewForm = ({ onCancel, formValues, submitSurvey, history }) => {

    const reviewFields = _.map(formFields, ({ name, label}) => {
       return (
           <div key={name} className="col span-1-of-3">
               <label>{label}</label>
               <div className="col span-2-of-3">
                   {formValues[name]}
               </div>
           </div>
       );
    });

    return (
        <div className="review-form">
            <h5>Please confirm your entries</h5>
            <div className="demo-form">
                <h2 className="demo-header">Survey Title</h2>
                {reviewFields}
            </div>
            <div className="demo-buttons">
                <button
                    className="btn-back"
                    onClick={onCancel}
                >
                    Back
                </button>
                <button
                    onClick={() => submitSurvey(formValues, history)}
                    className="btn-send">
                    Send Survey
                </button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReviewForm));