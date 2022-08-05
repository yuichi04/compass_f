import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Tooltip } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const UploadButton: React.FC = React.memo(() => {
  return (
    <>
      <Input accept="image/*" id="icon-button-file" type="file" value="" onChange={() => null} />
      <label htmlFor="icon-button-file">
        <IconButton aria-label="upload picture" component="span">
          <Tooltip title="プロフィール画像を変更する" placement="bottom">
            <PhotoCamera sx={{ fontSize: "50px" }} />
          </Tooltip>
        </IconButton>
      </label>
    </>
  );
});

export default UploadButton;
