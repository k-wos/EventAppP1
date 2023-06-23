import React from "react";
import { User } from "../models/user";
import { useForm } from "react-hook-form";
import { LoginCredentials } from "../network/users.api";
import * as UserApi from "../network/users.api";
import TextInputField from "./form/TextInputField";
import userStyles from "../styles/UserForms.module.css";
import { Button } from "react-bootstrap";

interface LoginModalProps {
  onLoginSuccessful: (user: User) => void;
  onSignUpClicked: () => void;
}

const LoginModal = ({
  onLoginSuccessful,
  onSignUpClicked,
}: LoginModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();

  async function onSubmit(credentials: LoginCredentials) {
    try {
      const user = await UserApi.login(credentials);
      onLoginSuccessful(user);
    } catch (error) {
      alert("Nieprawidłowe dane logowania");
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={userStyles.register}>
      <h2 className={userStyles.header2}>Zaloguj się</h2>
      <TextInputField
        className={userStyles.input}
        name="username"
        label="Nazwa użytkownika"
        type="text"
        placeholder="Nazwa uzytkownika"
        register={register}
        registerOptions={{ required: "Wymagane" }}
        error={errors.username}
      ></TextInputField>
      <TextInputField
        className={userStyles.input}
        name="password"
        label="Hasło"
        type="password"
        placeholder="***********"
        register={register}
        registerOptions={{ required: "Wymagane" }}
        error={errors.password}
      ></TextInputField>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={userStyles.button}
      >
        Zaloguj się
      </Button>
      <span onClick={onSignUpClicked} className={userStyles.toSignUp}>
        Nie posiadasz konta? Zarejestruj się!
      </span>
    </form>
  );
};

export default LoginModal;
