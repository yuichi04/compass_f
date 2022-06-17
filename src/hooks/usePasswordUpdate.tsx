import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { updateUserPassword } from "../lib/api/userApi";
import { useAppDispatch } from "../lib/redux/hooks";
import { hideLoadingAction, showLoadingAction } from "../lib/redux/features/lodingSlice";
import { validations } from "../modules/validations";

const { validateMoreThan8Characters } = validations();

export const usePasswordUpdate = () => {
  const dispatch = useAppDispatch();
  const [passwords, setPasswords] = useState({
    newPassword: "",
    newPasswordConfirmation: "",
  });
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  type Key = "newPassword" | "newPasswordConfirmation";
  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: Key) => {
      setPasswords({
        ...passwords,
        [key]: e.target.value,
      });
    },
    [passwords]
  );

  const handleSubmitNewPassword = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(showLoadingAction("更新中..."));
      setIsValidPassword(false);
      const newPassword = {
        password: passwords.newPassword,
      };
      try {
        const res = await updateUserPassword(newPassword);
        if (res.data.status === 200) {
          setPasswords({
            newPassword: "",
            newPasswordConfirmation: "",
          });
          toast.success("パスワードを更新しました");
        } else {
          toast.error("パスワードの更新に失敗しました");
        }
      } catch (error) {
        console.log(error);
        toast.error("パスワードの更新に失敗しました");
      }
      dispatch(hideLoadingAction());
    },
    [dispatch, passwords]
  );

  useEffect(() => {
    const newPassword = validateMoreThan8Characters(passwords.newPassword);
    const isMatch = passwords.newPassword === passwords.newPasswordConfirmation;

    //　有効なパスワードが入力されているか確認
    if (newPassword) {
      // パスワードが一致しているか確認
      if (isMatch) {
        setIsValidPassword(true);
        setIsErrorPassword(false);
      } else {
        setIsValidPassword(false);
        setIsErrorPassword(true);
      }
    } else {
      setIsValidPassword(false);
      setIsErrorPassword(false);
    }
  }, [passwords]);

  return {
    passwords,
    isErrorPassword,
    isValidPassword,
    handleChangePassword,
    handleSubmitNewPassword,
  };
};
