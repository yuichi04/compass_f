import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import { Divider } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "react-toastify";
import { LogInParams } from "../../types/userTypes";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { logOutAction, userSelector } from "../../lib/redux/userSlice";
import { deleteAccount, logIn } from "../../lib/api/userAuth";
import { MuiButton, MuiTextFieldWithAdornment, LinkTo, ErrorText } from "../atoms";
import { IconWithPageTitle } from "../molecules";
import MuiContaier from "../layouts/MuiContainer";
import { validations } from "../../modules/validations";
import { hideLoadingAction, showLoadingAction } from "../../lib/redux/lodingSlice";

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
    dispatch(showLoadingAction("実行中"));
    setIsValid(false);
    setError(false);
    setErrorMessage("");
    const deleteUserParams: LogInParams = {
      email: user.email,
      password,
    };
    try {
      // ユーザーの誤操作を防止するためにパスワードを入力させる
      const res = await logIn(deleteUserParams);
      if (res.data.status === 200) {
        const deleteRes = await deleteAccount();
        if (deleteRes.data.status === 200) {
          dispatch(hideLoadingAction());
          dispatch(logOutAction());
          toast.success("アカウントの削除が完了しました", {
            position: "top-center",
          });
          // TODO::専用のページに遷移させる
          navigate("/");
        } else {
          dispatch(hideLoadingAction());
          toast.error("アカウントの削除に失敗しました", {
            position: "top-center",
          });
        }
      } else {
        dispatch(hideLoadingAction());
        setError(true);
        setErrorMessage("パスワードが異なります");
      }
    } catch (error) {
      dispatch(hideLoadingAction());
      console.log(error);
    }
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
      <p>
        ※以下の注意事項を<span style={{ textDecoration: "underline" }}>必ず</span>
        ご確認の上、同意できる場合に限り、退会の申請をお願い致します。
      </p>
      <div className="module-spacer-md" />
      <dl>
        <dt>注意事項</dt>
        <SConsiderations>
          <li>
            「退会する」ボタンを押すと、即時アカウント削除処理が実行されます。処理実行後に退会のキャンセルはできません。
          </li>
          <li>
            アカウントの削除処理が実行されると、アカウントに関する全てのデータが完全に抹消されます。そのため、いかなる理由があってもデータの復旧はできません。
          </li>
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
