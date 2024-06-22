import { isValidUsername } from "6pp";

export const usernamevlidator = (username) => {
  if (!isValidUsername(username))
    return { isValid: false, errorMessage: "Username  is Invalid " };
};
