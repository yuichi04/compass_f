import { useCallback } from "react";
import { listenAuthState } from "../api/userApi";
import { useAppDispatch } from "../redux/hooks";
import { logInAction } from "../redux/features/userSlice";
import { UserParams } from "../types/userTypes";

export const useListenAuthState = () => {
  const dispatch = useAppDispatch();

  const handleListenAuthState = useCallback(async () => {
    try {
      const res = await listenAuthState();
      if (res.data.status === 200) {
        const user = res.data.user;
        const logInState: UserParams = {
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        };
        dispatch(logInAction(logInState));
      }
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return { handleListenAuthState };
};
