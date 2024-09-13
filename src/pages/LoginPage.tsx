import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="content-area flex flex-col  items-center">
      <h2 className=" mt-16 font-semibold text-2xl">
        Login to see our products!
      </h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
