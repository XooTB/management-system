import React from "react";
import "./Login.scss";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error, isLoading } = useLogin();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    login(email, password);
  };

  return (
    <div className="Login w-full h-2/4 bg-cyan-600 mr-auto">
      <form onSubmit={HandleSubmit} className="flex flex-col m-auto">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-2/3 h-10 p-5 rounded-md m-auto mt-20"
        />
        <input
          type="password"
          placeholder="Enter your passsword"
          className="w-2/3 h-10 p-5 rounded-md m-auto mt-10"
        />
        <button
          type="submit"
          className="submitBtn m-auto mt-10 mb-10 bg-cyan-300 w-2/3 hover:bg-cyan-400"
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
