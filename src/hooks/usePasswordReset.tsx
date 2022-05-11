import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validations } from "../modules/validations";

const { validateEmailFormat } = validations();

export const usePasswordReset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    console.log("Submit");
    navigate("/sentpasswordresetemail");
    /* 
    try {
        const res = await resetPassword(email);
        if (res.data.status === 200) {
            メール送信完了ページに遷移させる
        } else {
            送信失敗のエラーを表示する
        }
    } catch (error) {
        console.log(error)
    }
     */
  }, []);

  useEffect(() => {
    const isValidEmailFormat = validateEmailFormat(email);
    if (isValidEmailFormat) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email]);

  return {
    email,
    isValid,
    handleChange,
    handleSubmit,
  };
};
