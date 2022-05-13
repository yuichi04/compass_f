import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogInParams, UserParams } from "../types/userTypes";
import { validations } from "../modules/validations";
import { logIn } from "../lib/api/userAuth";
import { useAppDispatch } from "../lib/redux/hooks";
import { logInAction } from "../lib/redux/userSlice";

const { validateEmailFormat, validateMoreThan8Characters } = validations();

export const useLogIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [values, setValues] = useState<LogInParams>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: "email" | "password") => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, params: LogInParams) => {
      e.preventDefault();
      // Loadingフラグをon
      try {
        const res = await logIn(params);
        if (res.data.status === 200) {
          const user = res.data.user;
          const logInState: UserParams = {
            name: user.name,
            email: user.email,
          };
          dispatch(logInAction(logInState));
          navigate("/main");
          alert("ログインしました");
        } else {
          setError(!error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, navigate, error]
  );

  useEffect(() => {
    console.log("effect!");
    const isValidEmailFormat = validateEmailFormat(values.email);
    const isValidPassword = validateMoreThan8Characters(values.password);

    if (isValidEmailFormat && isValidPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values]);

  return {
    isValid,
    values,
    error,
    handleChange,
    handleSubmit,
  };
};