import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useUserStore } from "@/configs/store";
import { ICredentials, IResetForm } from "@/types";
import Link from "next/link";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const SigninEmailForm = () => {
  const signinEmail = useUserStore((state) => state.signinEmail);

  const handleLoginEmail = (
    values: ICredentials,
    { resetForm }: IResetForm
  ) => {
    signinEmail(values);
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleLoginEmail}
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={schema}
    >
      <Form className="space-y-6 mt-6">
        <label
          htmlFor="email"
          className="relative block text-sm font-medium leading-6 text-white"
        >
          <Field
            name="email"
            type="text"
            placeholder="email"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="email"
            className="absolute bottom-0 right-2 text-sm"
          />
        </label>

        <label
          htmlFor="password"
          className="relative block text-sm font-medium leading-6 text-white"
        >
          <Field
            name="password"
            type="password"
            placeholder="password"
            autoComplete="off"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="password"
            className="absolute bottom-0 right-2 text-xs"
          />
        </label>

        <button
          type="submit"
          className="disabled:opacity-40 bg-yellow-500 mt-12 py-2 w-full rounded-md text-black text-xl font-bold hover:bg-yellow-300 transition-colors"
        >
          Login with email
        </button>

        <Link href="/signup" className="block text-right text-sm font-semibold transition-colors hover:text-yellow-500">Not registered</Link>
      </Form>
    </Formik>
  );
};
