import { SigninGoogleBtn } from "@/components/ui/SigninGoogleBtn";
import { SigninEmailForm } from "@/components/ui/SigninEmailForm";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

export default async function SigninPage() {
  const session = await getServerSession(authConfig);

  console.log(session)

  return (
    <div className="text-center">
      <h1 className="py-5">Sign In</h1>

      <SigninGoogleBtn />

      <p>or</p>

      <SigninEmailForm />
    </div>
  );
}
