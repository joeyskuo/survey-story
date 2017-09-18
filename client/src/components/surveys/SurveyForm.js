import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({ label, name }) => {
           return (
               <Field
                component={SurveyField}
                type="text"
                label={label}
                name={name}
                key={name}
                />
           )});
    }

    render() {
        return (
            <section>
            <div className="contact-form">
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <button type="submit" className="btn btn-full btn-next">
                        Next{"     "}
                        <i className="ion-ios-arrow-right"></i>
                    </button>
                </form>
            </div>
            </section>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if(!values[name]) {
            errors[name] = `You must provide a value`;
        }
    });



    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);