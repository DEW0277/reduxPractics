import React, { useState } from "react";
import Input from "../ui/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="text-center">
    <main className="form-signin w-25 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal mt-3">Please login</h1>
        <Input label={"Email address"} state={email} setState={setEmail} />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </main>
  </div>
  );
};

export default Login;
