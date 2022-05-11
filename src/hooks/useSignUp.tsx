import { useState, useCallback, useEffect } from "react";
import { signUp } from "../lib/api/userAuth";
import { SignUpParams } from "../types/userTypes";
import { validations } from "../modules/validations";

// validations
const { validateIsNotEmpty, validateEmailFormat, validateMoreThan8Characters } = validations();

export const useSignUp = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [values, setValues] = useState<SignUpParams>({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    passwordConfirmation: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: "username" | "email" | "password" | "passwordConfirmation") => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  useEffect(() => {
    console.log("change!");
    const isValidUsername = validateIsNotEmpty(values.username);
    const isValidEmail = validateEmailFormat(values.email);
    const isValidPassword = validateMoreThan8Characters(values.password);
    const isValidPasswordConfirmation = values.password === values.passwordConfirmation && true;
    if (isValidUsername && isValidEmail && isValidPassword && isValidPasswordConfirmation && isChecked) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isChecked, values]);

  return {
    errors,
    values,
    isChecked,
    isValid,
    handleChange,
    setIsChecked,
  };
};
