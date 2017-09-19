import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label className="col span-1-of-3">{label}</label>
            <input className="col span-2-of-3" {...input} />
            <div className="red-text">
            { touched && error }
            </div>
        </div>
    );
}