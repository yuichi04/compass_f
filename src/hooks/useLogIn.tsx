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
  const [errorMessages, setErrorMessages] = useState("");

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
          navigate("/");
          console.log(res.data.user);
          alert("ログインしました");
        } else {
          setError(true);
          setErrorMessages("メールアドレスまたはパスワードが間違っています");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
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
    errorMessages,
    handleChange,
    handleSubmit,
  };
};
