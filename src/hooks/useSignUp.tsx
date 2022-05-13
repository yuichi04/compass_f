import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../lib/redux/hooks";
import { logInAction } from "../lib/redux/userSlice";
import { signUp } from "../lib/api/userAuth";
import { SignUpParams, UserParams } from "../types/userTypes";
import { validations } from "../modules/validations";

// validations
const { validateIsNotEmpty, validateEmailFormat, validateMoreThan8Characters } = validations();

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [values, setValues] = useState<SignUpParams>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: "name" | "email" | "password" | "passwordConfirmation") => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, params: SignUpParams) => {
      e.preventDefault();
      // Loadingフラグをon
      try {
        const res = await signUp(params);
        if (res.data.status === 200) {
          const user = res.data.user;
          const logInState: UserParams = {
            name: user.name,
            email: user.email,
          };
          // storeにユーザー情報を保存する
          dispatch(logInAction(logInState));
          navigate("/main");
          // Loadingフラグをoff
        } else {
          setError(!error);
          alert("アカウントの作成に失敗しました！");
          // Loadingフラグをoff
        }
      } catch (error) {
        console.log(error);
        // Loadingフラグをoff
      }
    },
    [dispatch, navigate, error]
  );

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
    error,
    values,
    isChecked,
    isValid,
    setIsChecked,
    handleChange,
    handleSubmit,
  };
};
