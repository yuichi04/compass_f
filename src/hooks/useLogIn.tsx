import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LogInParams } from "../types/userTypes";
import { validations } from "../modules/validations";

const { validateEmailFormat, validateMoreThan8Characters } = validations();

export const useLogIn = () => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [values, setValues] = useState<LogInParams>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: "email" | "password") => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>, params: LogInParams) => {
    e.preventDefault();
    // Loadingフラグをon
    console.log("login!");
    navigate("/main");
    // try {
    // const res = await logIn(params);
    // if (res.data.status === 200 ) {
    //    reduxにresのuserデータを格納する処理
    //    メインページに移動させる
    //    Loadingフラグをoff
    // } else {
    //    エラーフラグをonにする処理
    //    Loadingフラグをoff
    // }
    // } catch (error) {
    //   console.log(error);
    //    Loadingフラグをoff
    // }
  }, []);

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
    errors,
    handleChange,
    handleSubmit,
  };
};
