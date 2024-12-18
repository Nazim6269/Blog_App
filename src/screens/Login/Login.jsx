import { Link } from "react-router-dom";
import InputGroup from "../../Components/InputGroup/InputGroup";
import Button from "../../Components/ui/button/Button";
import { useTheme } from "../../hooks/useTheme";

const Login = () => {
  const [theme] = useTheme();
  return (
    <div className={`flex min-h-screen w-full items-center justify-center `}>
      <div
        className={`w-full max-w-md px-6 py-8 rounded-lg shadow-lg space-y-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } `}
      >
        <h2
          className={`text-center text-3xl font-bold mb-2 ${
            theme === "dark" ? "text-white" : "text-gray-800 "
          }`}
        >
          Login
        </h2>
        <form className="space-y-6">
          <InputGroup name="email" label="Email" type="email" />
          <InputGroup name="password" label="Password" type="password" />
          <Button type="submit" text="Login" />
        </form>

        <div className="flex justify-center items-center gap-2 text-lg">
          <p className="text-gray-800 dark:text-gray-300">
            Don&apos;t have an account?
          </p>
          <Link
            to={"/register"}
            className="text-indigo-600 hover:text-indigo-800 underline dark:text-indigo-400"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
