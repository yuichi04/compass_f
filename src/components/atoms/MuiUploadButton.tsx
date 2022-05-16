import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const Input = styled("input")({
  display: "none",
});

const MuiUploadButton: React.FC = React.memo(() => {
  return (
    <label htmlFor="icon-button-file">
      <Input accept="image/*" id="icon-button-file" type="file" value="" onChange={() => null} />
      <IconButton aria-label="upload picture" component="span">
        <PhotoCamera sx={{ fontSize: "50px" }} />
      </IconButton>
    </label>
  );
});

export default MuiUploadButton;
