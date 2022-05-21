import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logOut } from "../lib/api/userAuth";
import { useAppDispatch } from "../lib/redux/hooks";
import { logOutAction } from "../lib/redux/userSlice";
import { showLoadingAction, hideLoadingAction } from "../lib/redux/lodingSlice";

export const useLogOut = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = useCallback(async () => {
    dispatch(showLoadingAction("ログアウト中..."));
    // ログインしていなければ処理を停止する;
    try {
      const res = await logOut();
      if (res.data.status === 200) {
        // storeからユーザー情報を削除する
        dispatch(logOutAction());
        navigate("/");
        toast.success("ログアウトしました", {
          position: "top-center",
        });
      } else {
        toast.error("ログアウトに失敗しました");
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(hideLoadingAction());
  }, [dispatch, navigate]);

  return {
    handleClick,
  };
};
