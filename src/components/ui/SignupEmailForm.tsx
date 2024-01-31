"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useUserStore } from "@/configs/store";
import type { ICredentials, IResetForm } from "@/types";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "passwords must match"),
});

export const SignupEmailForm = () => {
  const signupEmail = useUserStore((state) => state.signupEmail);

  const handleSubmit = ({ email, password }: ICredentials, { resetForm }: IResetForm) => {
    const regData = { email, password };

    signupEmail(regData);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={schema}
    >
      <Form className="space-y-6 mt-6">
        <label
          htmlFor="email"
          className="relative block text-sm font-medium leading-6"
        >
          <Field
            name="email"
            type="text"
            placeholder="email"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="email"
            className="absolute bottom-0 right-2 text-sm"
          />
        </label>

        <label
          htmlFor="password"
          className="relative block text-sm font-medium leading-6"
        >
          <Field
            name="password"
            type="password"
            placeholder="password"
            autoComplete="off"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="password"
            className="absolute bottom-0 right-2 text-xs"
          />
        </label>

        <label
          htmlFor="passwordConfirm"
          className="relative block text-sm font-medium leading-6"
        >
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="re-password"
            autoComplete="off"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-black dark:invert shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="passwordConfirm"
            className="absolute bottom-0 right-2 text-xs"
          />
        </label>

        <button
          type="submit"
          className="disabled:opacity-40 bg-yellow-500 mt-12 py-2 w-full rounded-md text-black text-xl font-bold hover:bg-yellow-300 transition-colors"
        >
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};
