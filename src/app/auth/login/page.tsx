import { LoginForm } from "./ui/LoginForm";

export default function LoginPage() {

  return (
    <>
      <div className=" bg-slate-900 px-3 py-5 sm:px-8 sm:py-10 rounded-xl">
        <h2 className="text-2xl text-center font-bold">Sign In</h2>

        <LoginForm />
      </div>
    </>
  );
}