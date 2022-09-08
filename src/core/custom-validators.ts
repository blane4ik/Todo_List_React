import { ValidationRule } from 'react-hook-form';
import { values } from 'lodash';
import { emailRegEx } from '../constants/constants';

export const requiredValidator = (needToBeChecked = false): ValidationRule<boolean> => (
    {
        value: true,
        message: needToBeChecked ? 'ERRORS.CHECKED_REQUIRED' : 'ERRORS.REQUIRED'
    }
);

export const emailValidator = (email) => {
    console.log(email);
    return emailRegEx.test(email) || 'ERRORS.PATTERN_EMAIL';
};

export const minLengthValidator = (num: number) => (
    {
        value: num,
        message: 'ERRORS.MIN_LENGTH',
        params: {
            amount: num
        }
    }
);

export const minValueValidator = (num: number) => {
    return {
        value: num,
        message: 'ERRORS.MIN_AGE_VALUE',
        params: {
            amount: num
        }
    };
};
