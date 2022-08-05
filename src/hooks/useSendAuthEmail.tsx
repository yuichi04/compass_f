import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { sendAuthEmail } from "../api/userApi";
import { SignUpParams } from "../types/userTypes";
import { validations } from "../modules/validations";
import { showLoadingAction, hideLoadingAction } from "../redux/features/lodingSlice";
import { toast } from "react-toastify";

// validations
const { validateIsNotEmpty, validateEmailFormat, validateMoreThan8Characters } = validations();

export const useSendAuthEmail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState<SignUpParams>({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const [isCheckedAgree, setIsCheckedAgree] = useState(false);
  const [isValid, setIsValid] = useState(false);
  // エラーフラグの管理
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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
      setIsValid(false);

      // エラーフラグをoffに
      setNameError(false);
      setEmailError(false);
      setPasswordError(false);

      dispatch(showLoadingAction("認証メール送信中..."));
      try {
        const res = await sendAuthEmail(params);
        if (res.data.status === 200) {
          navigate("/sentauthemail");
          toast.success("認証メールが送信されました");
        } else if (res.data.message === "already") {
          toast.error("既に使用されているメールアドレスです");
        } else {
          toast.error("認証メールの送信に失敗しました");
        }
      } catch (error) {
        console.log(error);
      }
      dispatch(hideLoadingAction());
    },
    [dispatch, navigate]
  );

  // バリデーションをリアルタイムで監視
  useEffect(() => {
    const isValidUsername = validateIsNotEmpty(values.name);
    const isValidEmail = validateEmailFormat(values.email);
    const isValidPassword = validateMoreThan8Characters(values.password);
    const isValidPasswordConfirmation = values.password === values.passwordConfirmation;
    // ユーザーネーム:20文字以上はエラー
    values.name.length > 20 ? setNameError(true) : setNameError(false);
    // メールアドレス:255文字以上はエラー
    values.email.length > 255 ? setEmailError(true) : setEmailError(false);

    // 有効なパスワードが確認
    if (isValidPassword) {
      // パスワードが一致しているか確認
      if (isValidPasswordConfirmation) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    } else {
      // パスワードが一致しているかの確認は不要なため、不一致のエラーを非表示にする
      setPasswordError(false);
    }

    // 全てのバリデーションをクリアしたか確認
    if (
      !nameError &&
      !emailError &&
      isValidUsername &&
      isValidEmail &&
      isValidPassword &&
      isValidPasswordConfirmation &&
      isCheckedAgree
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isCheckedAgree, values, nameError, emailError]);

  return {
    nameError,
    emailError,
    passwordError,
    values,
    isCheckedAgree,
    isValid,
    setIsCheckedAgree,
    handleChange,
    handleSubmit,
  };
};
