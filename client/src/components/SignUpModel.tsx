import React from "react";
import { User } from "../models/user";
import { useForm } from "react-hook-form";
import { SignUpCredentials } from "../network/users.api";
import * as UsersApi from "../network/users.api";
import TextInputField from "./form/TextInputField";
import { Button } from "react-bootstrap";
import userStyles from "../styles/UserForms.module.css";

interface SignUpModelProps {
  onSignUpSuccessful: (user: User) => void;
  onSignInClicked: () => void;
}

const SignUpModel = ({
  onSignUpSuccessful,
  onSignInClicked,
}: SignUpModelProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCredentials>();

  async function onSubmit(credentials: SignUpCredentials) {
    try {
      const newUser = await UsersApi.signUp(credentials);
      onSignUpSuccessful(newUser);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
      className={userStyles.register}
    >
      <TextInputField
        className={userStyles.input}
        name="username"
        label="Nazwa użytkownika"
        type="text"
        placeholder="Nazwa uzytkownika"
        register={register}
        registerOptions={{ required: "Required" }}
        error={errors.username}
      ></TextInputField>

      <TextInputField
        className={userStyles.input}
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        register={register}
        registerOptions={{ required: "Required" }}
        error={errors.email}
      ></TextInputField>
      <TextInputField
        className={userStyles.input}
        name="password"
        label="Hasło"
        type="password"
        placeholder="***********"
        register={register}
        registerOptions={{ required: "Required" }}
        error={errors.pasword}
      ></TextInputField>
      <Button
        type="submit"
        disabled={isSubmitting}
        className={userStyles.button}
      >
        Załóż konto
      </Button>
    </form>
  );
};

export default SignUpModel;
