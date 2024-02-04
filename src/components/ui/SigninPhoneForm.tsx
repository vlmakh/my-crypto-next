'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { auth } from '@/configs/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import type { IResetForm } from '@/types';
import { useUserStore } from '@/configs/store';
import toast from 'react-hot-toast';

type Phone = {
  phone: string;
};

type Otp = {
  otp: string;
};

let schema = yup.object().shape({
  otp: yup.string().length(6),
});

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

export const SigninPhoneForm = () => {
  const [OTP, setOTP] = useState('');
  const setUserbyPhone = useUserStore(state => state.setUserbyPhone);

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

        toast.success('SMS sent successfully');
      })
      .catch(error => {
        toast.error('SMS not sent', error.message);
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
        toast.error(error.message);
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
        <Form className="mt-6 space-y-6">
          <label
            htmlFor="email"
            className="relative block text-sm font-medium leading-6"
          >
            <Field
              name="phone"
              type="text"
              placeholder="+380 XX XXX XXXX"
              autoComplete="off"
              className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
            ></Field>
            <ErrorMessage
              component="div"
              name="phone"
              className="absolute bottom-0 right-2 text-sm"
            />
          </label>

          <button
            type="submit"
            id="sign-in-button"
            className="mt-12 w-full rounded-md bg-yellow-500 py-2 text-xl font-bold text-black transition-colors hover:bg-yellow-300 disabled:opacity-40"
          >
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
        <Form className="mt-6 space-y-6">
          <label
            htmlFor="otp"
            className="relative block text-sm font-medium leading-6"
          >
            <Field
              name="otp"
              type="text"
              placeholder="XXXXXX"
              autoComplete="off"
              className="block w-full rounded-md border-0 bg-white/5 px-2 py-1.5 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
            ></Field>
            <ErrorMessage
              component="div"
              name="otp"
              className="absolute bottom-0 right-2 text-xs"
            />
          </label>

          <button
            type="submit"
            className="mt-12 w-full rounded-md bg-yellow-500 py-2 text-xl font-bold text-black transition-colors hover:bg-yellow-300 disabled:opacity-40"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
