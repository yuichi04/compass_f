import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { hideLoadingAction, showLoadingAction } from "../lib/redux/features/lodingSlice";
import { validations } from "../modules/validations";
import { useAppDispatch } from "../lib/redux/hooks";
import { updateUserName } from "../lib/api/userApi";
import { useListenAuthState } from "./useListenAuthState";

export const useUpdateProfile = () => {
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

  type Key = "name" | "email";
  const handleChangeUserProfile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: Key) => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleClickEditMode = useCallback(
    (key: Key, bool: boolean) => {
      setEdit({
        ...edit,
        [key]: bool,
      });
    },
    [edit]
  );

  const handleSubmitNewUserProfile = useCallback(
    async (e: React.FormEvent<HTMLFormElement>, key: Key) => {
      e.preventDefault();
      dispatch(showLoadingAction("更新中..."));
      switch (key) {
        case "name":
          try {
            const newUserName = {
              name: values.name,
            };
            console.log(values.name);
            const res = await updateUserName(newUserName);
            console.log(newUserName);
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
              toast.success("ユーザーネームに失敗しました");
            }
          } catch (error) {
            console.log(error);
          }
          break;
        case "email":
          break;
      }
      dispatch(hideLoadingAction());
    },
    [dispatch, values, edit, handleListenAuthState]
  );

  useEffect(() => {
    const isValidName = validateIsNotEmpty(values.name);
    setValid({
      ...valid,
      name: isValidName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.name]);

  useEffect(() => {
    const isValidEmail = validateIsNotEmpty(values.email);
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
    handleClickEditMode,
    handleChangeUserProfile,
    handleSubmitNewUserProfile,
  };
};
