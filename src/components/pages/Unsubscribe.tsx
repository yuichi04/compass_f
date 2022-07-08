import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import { Divider } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "react-toastify";
import { LogInParams } from "../../types/userTypes";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { logOutAction, userSelector } from "../../lib/redux/features/userSlice";
import { deleteAccount, logIn } from "../../lib/api/userApi";
import { MuiButton, LinkTo, ErrorText } from "../atoms";
import { IconWithPageTitle, MuiTextFieldWithAdornment } from "../molecules";
import MuiContaier from "../layouts/MuiContainer";
import { validations } from "../../modules/validations";
import { hideLoadingAction, showLoadingAction } from "../../lib/redux/features/lodingSlice";

const { validateMoreThan8Characters } = validations();

// 退会処理（=アカウント削除）はこのページでしか実行しないため、カスタムフックは作らず、コンポーネント内で完結させる
const Unsubscribe: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirm = window.confirm("アカウントを削除してよろしいでしょうか？");
    if (!confirm) return;

    dispatch(showLoadingAction("実行中"));
    setIsValid(false);
    setError(false);
    setErrorMessage("");
    const deleteUserParams: LogInParams = {
      email: user.email,
      password,
    };
    try {
      const res = await logIn(deleteUserParams);
      if (res.data.status === 200) {
        const deleteRes = await deleteAccount();
        if (deleteRes.data.status === 200) {
          dispatch(logOutAction());
          toast.success("アカウントの削除が完了しました", {
            position: "top-center",
          });
          navigate("/");
        } else {
          toast.error("アカウントの削除に失敗しました", {
            position: "top-center",
          });
        }
      } else {
        setError(true);
        setErrorMessage("パスワードが異なります");
      }
    } catch (error) {
      dispatch(hideLoadingAction());
      console.log(error);
    }
    dispatch(hideLoadingAction());
  };

  useEffect(() => {
    const valid = validateMoreThan8Characters(password);
    if (valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [password]);

  return (
    <MuiContaier maxWidth="sm">
      <LinkTo to="/profile">
        &lt; <span style={{ textDecoration: "underline" }}>戻る</span>
      </LinkTo>
      <IconWithPageTitle icon={UnsubscribeIcon} title="退会の申請" />
      <p>※以下の注意事項を必ずご確認の上、同意できる場合に限り、退会の申請をお願い致します。</p>
      <div className="module-spacer-md" />
      <dl>
        <dt>注意事項</dt>
        <SConsiderations>
          <li>「退会する」ボタンを押すと即時アカウントの削除が実行されます。実行後にキャンセルはできません。</li>
          <li>アカウントに関する全てのデータは完全に抹消されます。いかなる理由があっても復旧はできません。</li>
          <li>退会をすることによって生じる影響について、当方はその一切の責任を負いません。</li>
        </SConsiderations>
      </dl>
      <Divider sx={{ margin: "24px 0" }} />
      {error && <ErrorText text={errorMessage} />}
      <p>パスワードを入力してください</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MuiTextFieldWithAdornment
          icon={<KeyIcon />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          fullWidth
          autoComplete="password"
          error={!isValid}
        />
        <div className="module-spacer-md" />
        <MuiButton color="error" variant="contained" fullWidth type="submit" disabled={!isValid}>
          退会する
        </MuiButton>
      </form>
    </MuiContaier>
  );
});

export default Unsubscribe;

const SConsiderations = styled.dd`
  padding: 16px;
  color: #000;
  border: 2px solid #c62828;
  border-radius: 8px;
  background: rgba(198, 40, 40, 0.1);
  margin-bottom: 24px;
`;
