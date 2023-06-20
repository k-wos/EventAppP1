import React from "react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";

interface TextInputFieldProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
  error?: FieldError;
  [x: string]: any;
}

export const TextInputField = () => {
  return <div>TextInputField</div>;
};
