import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useUserStore } from "@/configs/store";
import { ICredentials, IResetForm } from "@/types";

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
      <Form className="">
        <label
          htmlFor="email"
          className="relative block text-sm font-medium leading-6 text-white py-6"
        >
          <Field
            name="email"
            type="text"
            placeholder="email"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="email"
            className="absolute bottom-0 right-0"
          />
        </label>

        <label
          htmlFor="password"
          className="relative block text-sm font-medium leading-6 text-white py-6"
        >
          <Field
            name="password"
            type="password"
            placeholder="password"
            autoComplete="off"
            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
          />
          <ErrorMessage
            component="div"
            name="password"
            className="absolute bottom-0 right-0"
          />
        </label>

        <button
          type="submit"
          className="mt-6 disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Login with email
        </button>
      </Form>
    </Formik>
  );
};
