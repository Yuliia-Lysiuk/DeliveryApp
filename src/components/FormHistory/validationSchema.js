import * as yup from 'yup';

export const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .min(3, 'Email should be of min 3 characters length')
    .max(254, 'Email should be of max 254 characters length')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .number('Enter your phone')
    // .min(9, 'Phone should be of min 10 characters length')
    // .max(13, 'Phone should be of max 13 characters length')
    .required('Phone is required'),
});

export const validationSchemaDistance = yup.object({
  address: yup
    .string('Enter your address')
    .min(3, 'address should be of min 3 characters length')
    .max(254, 'address should be of max 254 characters length')
    .required('address is required'),
});
