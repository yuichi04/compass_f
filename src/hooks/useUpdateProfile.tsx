import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { hideLoadingAction, showLoadingAction } from "../redux/features/lodingSlice";
import { validations } from "../modules/validations";
import { useAppDispatch } from "../redux/hooks";
import { sendAuthEmailForUpdate, updateEmail, updateUserName } from "../api/userApi";
import { useListenAuthState } from "./useListenAuthState";
import { useNavigate } from "react-router-dom";

// どの項目を更新するかの型を定義
type Key = "name" | "email";

export const useUpdateProfile = () => {
  const navigate = useNavigate();
  const { handleListenAuthState } = useListenAuthState();
  const dispatch = useAppDispatch();
  const { validateEmailFormat, validateIsNotEmpty } = validations();
  const [edit, setEdit] = useState({
    name: false,
    email: false,
  });
  const [values, setValues] = useState({
    name: "",
    email: "",
  });
  const [valid, setValid] = useState({
    name: false,
    email: false,
  });

  // ユーザーの入力値をステートに保管
  const handleChangeUserProfile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: Key) => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  // 編集モードへの切り替え
  const handleClickEditMode = useCallback(
    (key: Key, bool: boolean) => {
      setEdit({
        ...edit,
        [key]: bool,
      });
    },
    [edit]
  );

  // ユーザー情報の更新
  // ユーザーネームの場合は更新完了まで実行
  // メールアドレスの場合は認証メールを送信する
  const handleSubmitNewUserProfile = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, key: Key) => {
      e.preventDefault();
      switch (key) {
        case "name":
          dispatch(showLoadingAction("更新中..."));
          try {
            const newUserName = {
              name: values.name,
            };
            const res = await updateUserName(newUserName);
            if (res.data.status === 200) {
              setValues({
                ...values,
                [key]: "",
              });
              setEdit({
                ...edit,
                [key]: false,
              });
              // 新しいユーザー情報を取得する
              handleListenAuthState();
              toast.success("ユーザーネームを更新しました");
            } else {
              toast.success("ユーザーネームの更新に失敗しました");
            }
          } catch (error) {
            console.log(error);
          }
          break;
        case "email":
          dispatch(showLoadingAction("認証メール送信中..."));
          try {
            const newEmail = {
              email: values.email,
            };
            const res = await sendAuthEmailForUpdate(newEmail);
            if (res.data.status === 200) {
              toast.success("認証メールを送信しました。");
            } else if (res.data.message === "already") {
              toast.error("既に使用されているメールアドレスです", {
                position: "top-center",
                autoClose: false,
              });
            } else {
              toast.error("認証メールの送信に失敗しました。");
            }
          } catch (error) {
            console.log(error);
            toast.error("認証メールの送信に失敗しました。");
          }
          break;
      }
      dispatch(hideLoadingAction());
    },
    [dispatch, values, edit, handleListenAuthState]
  );

  // メールアドレスを更新
  const handleUpdateEmail = useCallback(
    async (token: string) => {
      dispatch(showLoadingAction("メールアドレス認証中..."));
      const params = {
        token,
      };
      try {
        const res = await updateEmail(params);
        if (res.data.status === 200) {
          handleListenAuthState();
          toast.success("メールアドレスを更新しました");
        } else {
          toast.error("メールアドレスの更新に失敗しました");
        }
      } catch (error) {
        toast.error("認証情報が確認できませんでした。");
      }
      navigate("/profile");
      dispatch(hideLoadingAction());
    },
    [dispatch, navigate, handleListenAuthState]
  );

  // ユーザーの入力に合わせてバリデーションを実行
  // ユーザーネーム
  useEffect(() => {
    const isValidName = validateIsNotEmpty(values.name);
    setValid({
      ...valid,
      name: isValidName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.name]);
  // メールアドレス
  useEffect(() => {
    const isValidEmail = validateEmailFormat(values.email);
    setValid({
      ...valid,
      email: isValidEmail,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.email]);

  return {
    valid,
    values,
    edit,
    handleUpdateEmail,
    handleClickEditMode,
    handleChangeUserProfile,
    handleSubmitNewUserProfile,
  };
};
