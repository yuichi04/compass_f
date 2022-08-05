import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoToTop: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    toast.error("既にログインしています", {
      position: "top-center",
    });
  }, [navigate]);

  return null;
};

export default GoToTop;
