import { UserInput } from "../types/UserInput";
import { FieldError } from "../types/FieldError";

export const validateRegistration = ({
  email,
  username,
  password,
}: UserInput): FieldError[] => {
  // basic validations
  const errors = [];
  if (!email.includes("@"))
    errors.push({
      field: "email",
      message: "Incorrect email format",
    });

  if (username.length < 4)
    errors.push({
      field: "username",
      message: "User name is too short",
    });

  if (password.length < 6)
    errors.push({
      field: "password",
      message: "Password is too short",
    });

  return errors;
};
