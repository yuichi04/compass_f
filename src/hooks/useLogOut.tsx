import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../lib/api/userAuth";
import { useAppDispatch } from "../lib/redux/hooks";
import { logOutAction } from "../lib/redux/userSlice";

export const useLogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = useCallback(async () => {
    // ログインしていなければ処理を停止する;
    try {
      const res = await logOut();
      if (res.data.status === 200) {
        navigate("/");
        // storeからユーザー情報を削除する
        dispatch(logOutAction());
        alert("ログアウトしました");
      } else {
        alert("ログアウトに失敗しました");
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, navigate]);

  return {
    handleClick,
  };
};
