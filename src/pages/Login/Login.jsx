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
    <div className="Login">
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          className="input input1"
        />
        <input
          type="password"
          placeholder="Enter your passsword"
          className="input input2"
        />
        <button type="submit" className="submitBtn" disabled={isLoading}>
          Submit
        </button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
