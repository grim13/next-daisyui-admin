"use client";

import { useState } from "react";
import InputText from "../input/input-text";
import ErrorText from "./error-text";

interface LoginObj {
  password: string;
  username: string;
}

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loginObj, setLoginObj] = useState<LoginObj>({
    password: "",
    username: "",
  });

  const updateFormValue = (updateType: string, value: string): void => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <form action={loginProcess}>
      <div className="mb-4">
        <p className="text-center text-lg md:mt-0 mt-6 mb-5  font-semibold">
          Enter Your Credential to Continue
        </p>
        <InputText
          defaultValue={loginObj.username}
          updateType="username"
          containerStyle="mt-4"
          labelTitle="Username"
          placeholder="Input Username"
          updateFormValue={updateFormValue}
        />
        <InputText
          type="password"
          defaultValue={loginObj.password}
          updateType="password"
          containerStyle="mt-4"
          labelTitle="Password"
          placeholder="Input password"
          updateFormValue={updateFormValue}
        />
      </div>
      <div className="mt-8">
        {errorMessage && (
          <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
        )}
        <button type="submit" className={`btn mt-2 w-full btn-primary btn-circle`}>
          Login
        </button>
      </div>
    </form>
  );
}
