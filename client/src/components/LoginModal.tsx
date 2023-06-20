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
}

const LoginModal = ({ onLoginSuccessful }: LoginModalProps) => {
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
      alert(error);
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        name="password"
        label="Hasło"
        type="password"
        placeholder="***********"
        register={register}
        registerOptions={{ required: "Required" }}
        error={errors.password}
      ></TextInputField>
      <Button
        type="submit"
        disabled={isSubmitting}
        className={userStyles.button}
      >
        Zaloguj się
      </Button>
    </form>
  );
};

export default LoginModal;
