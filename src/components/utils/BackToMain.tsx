import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackToMain: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("back");
    navigate("/main");
    alert("ログイン済みです");
  }, [pathname, navigate]);

  return null;
};

export default BackToMain;
