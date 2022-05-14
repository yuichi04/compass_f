import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import { Divider } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "react-toastify";
import { LogInParams } from "../../types/userTypes";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/userSlice";
import { deleteAccount, logIn } from "../../lib/api/userAuth";
import { MuiButton, MuiTextFieldWithAdornment, LinkTo } from "../atoms";
import { IconWithPageTitle } from "../molecules";
import MuiContaier from "../layouts/MuiContainer";
import { validations } from "../../modules/validations";
import { hideLoadingAction, showLoadingAction } from "../../lib/redux/lodingSlice";

const { validateMoreThan8Characters } = validations();

const Unsubscribe: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  // 退会処理（=アカウント削除）はこのページでしか実行しないため、カスタムフックにはせず、コンポーネント内で完結させる
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(showLoadingAction("実行中"));
    setIsValid(false);
    const deleteUserParams: LogInParams = {
      email: user.email,
      password,
    };
    try {
      const res = await logIn(deleteUserParams);
      if (res.data.status === 200) {
        const deleteRes = await deleteAccount();
        if (deleteRes.data.status === 200) {
          dispatch(hideLoadingAction());
          toast.success("アカウントの削除が完了しました", {
            position: "top-center",
          });
          navigate("/"); // TODO::専用のページを作成する
        } else {
          dispatch(hideLoadingAction());
          toast.error("アカウントの削除に失敗しました");
        }
      } else {
        dispatch(hideLoadingAction());
        toast.error("有効ではないユーザーです");
        navigate("/");
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
