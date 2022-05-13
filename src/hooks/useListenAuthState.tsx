import { useCallback } from "react";
import { listenAuthState } from "../lib/api/userAuth";
import { useAppDispatch } from "../lib/redux/hooks";
import { hideLoadingAction, showLoadingAction } from "../lib/redux/lodingSlice";
import { logInAction } from "../lib/redux/userSlice";
import { UserParams } from "../types/userTypes";

export const useListenAuthState = () => {
  const dispatch = useAppDispatch();

  const handleListenAuthState = useCallback(async () => {
    dispatch(showLoadingAction("Loading..."));
    try {
      const res = await listenAuthState();
      if (res.data.status === 200) {
        const user = res.data.user;
        const logInState: UserParams = {
          name: user.name,
          email: user.email,
        };
        dispatch(logInAction(logInState));
      }
      dispatch(hideLoadingAction());
    } catch (error) {
      console.log(error);
      dispatch(hideLoadingAction());
    }
  }, [dispatch]);

  return { handleListenAuthState };
};
