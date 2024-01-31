'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { auth } from '@/configs/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import type { IResetForm } from '@/types';
import { useUserStore } from "@/configs/store";

type Phone = {
  phone: string;
};

type Otp = {
  otp: string;
};

let schema = yup.object().shape({
  otp: yup.string().length(6).required(),
});

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

export const SigninPhoneForm = () => {
  const [OTP, setOTP] = useState('');
  const setUserbyPhone = useUserStore((state) => state.setUserbyPhone);

  const handleLoginPhone = () => {};

  const generateRecapcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      size: 'invisible',
      callback: (response: any) => {},
    });
  };

  const requestOTP = (values: Phone) => {
    generateRecapcha();

    const phoneNumber = values.phone;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;
      })
      .catch(error => {
        console.log('SMS not sent', error.message);
      });
  };

  const confirmOTP = (values: Otp, { resetForm }: IResetForm) => {
    setOTP(values.otp);

    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(OTP)
      .then((result: any) => {
        const user = result.user;

        setUserbyPhone(user);
      })
      .catch((error: any) => {
        console.log(error.message);
      })
      .finally(() => {
        resetForm();
      });
  };

  return (
    <div>
      <Formik
        onSubmit={requestOTP}
        initialValues={{
          phone: '',
        }}
      >
        <Form>
          <button type="button" onClick={handleLoginPhone}>
            Back
          </button>

          <label htmlFor="email">
            <Field
              name="phone"
              type="text"
              placeholder="+380 XX XXX-XXXX"
              autoComplete="off"
            ></Field>
            <ErrorMessage component="div" name="phone" />
          </label>

          <button type="submit" id="sign-in-button">
            Send code
          </button>
        </Form>
      </Formik>

      <Formik
        onSubmit={confirmOTP}
        initialValues={{
          otp: '',
        }}
        validationSchema={schema}
      >
        <Form>
          <label htmlFor="otp">
            <Field
              name="otp"
              type="text"
              placeholder="XXXXXX"
              autoComplete="off"
            ></Field>
            <ErrorMessage component="div" name="otp" />
          </label>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
