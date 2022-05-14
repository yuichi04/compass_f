import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../lib/redux/hooks";
import { logInAction } from "../lib/redux/userSlice";
import { signUp } from "../lib/api/userAuth";
import { SignUpParams, UserParams } from "../types/userTypes";
import { validations } from "../modules/validations";
import { showLoadingAction, hideLoadingAction } from "../lib/redux/lodingSlice";
import { Bounce, toast } from "react-toastify";

// validations
const { validateIsNotEmpty, validateEmailFormat, validateMoreThan8Characters } = validations();

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isCheckedAgree, setIsCheckedAgree] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    api: false,
    confirmation: false,
  });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [values, setValues] = useState<SignUpParams>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
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
      dispatch(showLoadingAction("ユーザー作成中..."));
      setIsValid(false);
      setErrors({ ...errors, api: false });
      setErrorMessages([""]);

      try {
        const res = await signUp(params);
        if (res.data.status === 200) {
          const user = res.data.user;
          const logInState: UserParams = {
            name: user.name,
            email: user.email,
          };
          // storeにユーザー情報を保存
          dispatch(logInAction(logInState));
          navigate("/");
          dispatch(hideLoadingAction());
          toast.success("アカウントが作成されました", {
            transition: Bounce,
          });
        } else {
          setErrors({ ...errors, api: true });
          setErrorMessages(res.data.message);
          dispatch(hideLoadingAction());
        }
      } catch (error) {
        console.log(error);
        dispatch(hideLoadingAction());
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, navigate]
  );

  useEffect(() => {
    const isValidUsername = validateIsNotEmpty(values.name);
    const isValidEmail = validateEmailFormat(values.email);
    const isValidPassword = validateMoreThan8Characters(values.password);
    const isValidPasswordConfirmation = values.password === values.passwordConfirmation && true;

    // 有効なパスワードが確認
    if (isValidPassword) {
      // パスワードが一致しているか確認
      if (isValidPasswordConfirmation) {
        setErrors({
          ...errors,
          confirmation: false,
        });
        setErrorMessages([""]);
      } else {
        setErrors({
          ...errors,
          confirmation: true,
        });
      }
    } else {
      // パスワードが一致しているかの確認は不要なため、不一致のエラーを非表示にする
      setErrors({
        ...errors,
        confirmation: false,
      });
    }

    // validationをパスしたかしていないかを判定し、stateを更新
    if (isValidUsername && isValidEmail && isValidPassword && isValidPasswordConfirmation && isCheckedAgree) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheckedAgree, values]);

  return {
    errors,
    errorMessages,
    values,
    isCheckedAgree,
    isValid,
    setIsCheckedAgree,
    handleChange,
    handleSubmit,
  };
};
