import React from 'react';

export function renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    );
}

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = max => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const minLength = min => value => value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value => value && value < min ? `Must be at least ${min}` : undefined
export const minValue13 = minValue(13)
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined
export const tooYoung = value => value && value < 13 ? 'You do not meet the minimum age requirement!' : undefined
export const aol = value => value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined
export const alphaNumeric = value => value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined
export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined


export const marginRowTop = {
    marginTop: '50px',
    backgroundColor: '#BCC9D3'
};

export const marginRowBottom = {
    marginBottom: '50px',
}

export const displayFlexDisable ={
    display: 'yes'
}
export const backgroundColor ={
    backgroundColor: '#E8E8E8'
}