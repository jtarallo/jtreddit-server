import Redis from "ioredis";
import { FieldError } from "../types/FieldError";
import { FORGET_PASSWORD_PREFIX } from "../constants";

export const validateChangePassword = async (
  password: string,
  redisClient: Redis.Redis,
  token: string
): Promise<{ errors: FieldError[] } & { userId: string | null }> => {
  const errors = [];
  if (password.length < 6)
    errors.push({
      field: "password",
      message: "Password is too short",
    });

  const userId = await redisClient.get(`${FORGET_PASSWORD_PREFIX}${token}`);
  if (!userId) {
    errors.push({
      field: "token",
      message: "invalid token",
    });
  }

  return { errors, userId };
};
