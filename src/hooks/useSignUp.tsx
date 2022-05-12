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
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    passwordConfirmation: false,
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: "name" | "email" | "password" | "passwordConfirmation") => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>, params: SignUpParams) => {
    e.preventDefault();
    // Loadingフラグをon
    console.log("signup");
    try {
      const res = await signUp(params);
      if (res.data.status === 200) {
        alert("アカウントが作成されました！");
        // reduxにresのuserデータを格納する処理
        // メインページに遷移させる
        // Loadingフラグをoff
      } else {
        alert("アカウントの作成に失敗しました！");
        // Loadingフラグをoff
      }
    } catch (error) {
      console.log("例外: ", error);
      // Loadingフラグをoff
    }
  }, []);

  useEffect(() => {
    const isValidUsername = validateIsNotEmpty(values.name);
    const isValidEmail = validateEmailFormat(values.email);
    const isValidPassword = validateMoreThan8Characters(values.password);
    const isValidPasswordConfirmation = values.password === values.passwordConfirmation && true;

    // validationをパスしたかしていないかを判定し、stateを更新
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
    setIsChecked,
    handleChange,
    handleSubmit,
  };
};
