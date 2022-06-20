import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signUp } from "../lib/api/userApi";
import { useAppDispatch } from "../lib/redux/hooks";
import { hideLoadingAction, showLoadingAction } from "../lib/redux/features/lodingSlice";
import { logInAction } from "../lib/redux/features/userSlice";
import { UserParams } from "../types/userTypes";

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const register = useCallback(
    async (token: string) => {
      dispatch(showLoadingAction("認証情報を確認しています..."));
      const params = {
        token,
      };
      try {
        const res = await signUp(params);
        if (res.data.status === 200) {
          const user = res.data.user;
          const loginState: UserParams = {
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
          };
          dispatch(logInAction(loginState));
          toast.success("認証が完了しました");
        } else {
          toast.error("認証コードの有効期限が切れています。");
        }
      } catch (error) {
        toast.error("認証情報が確認できませんでした");
        console.log(error);
      }
      navigate("/");
      dispatch(hideLoadingAction());
    },
    [dispatch, navigate]
  );

  return { register };
};
