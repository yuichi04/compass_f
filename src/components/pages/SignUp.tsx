import React from "react";
import { MuiButton, MuiTextField } from "../uikit";

const SignUp: React.FC = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <span>必須</span>
      <MuiTextField fullWidth value="aiueo" onChange={() => console.log("onChange!")} />
      <MuiButton variant="contained" color="primary" fullWidth onClick={() => alert("Click!")}>
        アカウントを作成する
      </MuiButton>
    </div>
  );
};

export default SignUp;
