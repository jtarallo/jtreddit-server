import { FieldError } from "../types/FieldError";

export const validateChangePassword = (
  password: string,
  userId: string
): FieldError[] => {
  const errors = [];
  if (password.length < 6)
    errors.push({
      field: "password",
      message: "Password is too short",
    });

  if (!userId) {
    errors.push({
      field: "token",
      message: "Token expired.",
    });
  }

  return errors;
};
