// import { getServerSession } from "next-auth";
// import { authConfig } from "@/configs/auth";
import { SignupEmailForm } from "@/components/ui/SignupEmailForm";

export default async function SignupPage() {
  // const session = await getServerSession(authConfig);

//   console.log(session);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign up
        </h2>
      </div>
      <SignupEmailForm />
    </div>
  );
}
