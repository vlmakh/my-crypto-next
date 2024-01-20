import { BtnSigninGoogle } from "@/components/ui/BtnSigninGoogle";

export default async function SigninPage() {
  return (
    <div className="text-center">
      <h1 className="py-5">Sign In</h1>

      <BtnSigninGoogle />
    </div>
  );
}
