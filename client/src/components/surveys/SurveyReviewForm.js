import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyReviewForm = ({ onCancel, formValues }) => {

    const reviewFields = _.map(formFields, ({ name, label}) => {
       return (
           <div key={name}>
               <label>{label}</label>
               <div>
                   {formValues[name]}
               </div>
           </div>
       );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={onCancel}
            >
                Back
            </button>
            <button className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">done</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyReviewForm);