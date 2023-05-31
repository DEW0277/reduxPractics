import React, { useState } from "react";
import Input from "../ui/input";
import { useDispatch,useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const registerHandler = e => {
    e.preventDefault()
    dispatch(loginUserStart());

  }

  return (
    <div className="text-center">
      <main className="form-signin w-25 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal mt-3">Please register</h1>
          <Input label={"Username"} state={name} setState={setName} />
          <Input label={"Email address"} state={email} setState={setEmail} />
          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />
          <button className="w-100 btn btn-lg btn-primary mt-3" disabled={isLoading} onClick={registerHandler} type="submit">
            {isLoading ? "Loading..." : "Register"}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
