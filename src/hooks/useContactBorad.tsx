import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { sendContactEmail } from "../api/userApi";
import { showLoadingAction, hideLoadingAction } from "../redux/features/lodingSlice";
import { userSelector } from "../redux/features/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { validations } from "../modules/validations";
import { ContactBoardType } from "../types/userTypes";

export const useContactBorad = () => {
  const { validateIsNotEmpty } = validations();
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [values, setValues] = useState<ContactBoardType>({
    email: user.email,
    category: "",
    content: "",
  });

  type Key = "email" | "category" | "content";
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: Key) => {
      setValues({
        ...values,
        [key]: e.target.value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(showLoadingAction("送信中...."));

      // 送信ボタンをdisabledに
      setIsValid(false);

      // メールの送信処理
      try {
        const res = await sendContactEmail(values);
        if (res.status === 200) {
          toast.success("送信されました。");
          // フォームの入力内容をクリア
          setValues({
            email: "",
            category: "",
            content: "",
          });
          setIsOpen(false);
        } else {
          toast.error("送信に失敗しました。");
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
      dispatch(hideLoadingAction());
    },
    [dispatch, values]
  );

  useEffect(() => {
    const isCategory = validateIsNotEmpty(values.category);
    const isContent = validateIsNotEmpty(values.content);
    if (isCategory && isContent) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return {
    isValid,
    setIsValid,
    values,
    setValues,
    handleChange,
    handleSubmit,
    isOpen,
    setIsOpen,
  };
};
export default useContactBorad;
