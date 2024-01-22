import { SigninGoogleBtn } from "@/components/ui/SigninGoogleBtn";
import { SigninEmailForm } from "@/components/ui/SigninEmailForm";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

export default async function SigninPage() {
  const session = await getServerSession(authConfig);

  {
    session?.user && redirect(`/watchlist`);
  }

  return (
    <div className="text-center pt-8">

      <SigninGoogleBtn />

      <p className="mt-5">or</p>

      <SigninEmailForm />
    </div>
  );
}
