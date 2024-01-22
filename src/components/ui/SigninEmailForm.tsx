"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SigninEmailForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="px-3 my-8">
        <form className="sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          <label
            htmlFor="email"
            className="block text-sm text-left font-medium leading-6 text-white"
          >
            Email address
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </label>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
              <div className="text-sm">
                <div
                  onClick={() => router.push("/forgot-password")}
                  className="cursor-pointer font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </div>
              </div>
            </div>

            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>

          <button
            type="submit"
            onClick={() =>
              signIn("credentials", {
                email,
                password,
                redirect: true,
                callbackUrl: "/",
              })
            }
            disabled={!email || !password}
            className="disabled:opacity-40 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>

          <div className="mt-6 flex justify-between">
            <p className="text-center text-sm text-gray-400">Not a member? </p>
            <button
              onClick={() => router.push("signup")}
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300 ml-auto"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
