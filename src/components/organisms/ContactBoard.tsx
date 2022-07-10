import React from "react";
import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { theme } from "../../assets/theme";
import { LinkTo, MuiButton, MuiTextField } from "../atoms";
import { SelectBox } from "../molecules";
import useContactBorad from "../../hooks/useContactBorad";

const options = [
  { value: "レッスン内容について", label: "レッスン内容について" },
  { value: "ご意見・ご要望", label: "ご意見・ご要望" },
  { value: "エラー・バグ報告", label: "エラー・バグ報告" },
  { value: "その他", label: "その他" },
];

const ContactBoard: React.FC = React.memo(() => {
  const { isValid, values, handleChange, handleSubmit, isOpen, setIsOpen } = useContactBorad();
  return (
    <SBoard>
      <SContactButton>
        <MuiButton color="secondary" onClick={() => setIsOpen(true)}>
          <HelpOutlineIcon fontSize="small" sx={{ mr: "4px" }} />
          お問い合わせ
        </MuiButton>
      </SContactButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{ zIndex: 998 }}>
        <Box sx={style.box}>
          <IconButton onClick={() => setIsOpen(false)} sx={style.icon}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Typography>
                COMPASSをご利用頂きありがとうございます。 <br />
                ご不明点やご意見・ご要望などがございましたらフォームよりご連絡ください。
                <br />
                <br />
                また、
                <Typography color="primary.light" component="span" onClick={() => setIsOpen(false)}>
                  <LinkTo to="/help">ヘルプページ</LinkTo>
                </Typography>
                にサービスに関することや、よくあるご質問について記載しておりますので合わせてご確認ください。
              </Typography>
              <br />
              お問い合わせいただいた内容につきましては、メールにて順次ご返信いたします。
            </Grid>
            <Grid item xs={6}>
              <form onSubmit={handleSubmit}>
                <SelectBox
                  label="- 選択してください -"
                  options={options}
                  category={values.category}
                  onChange={(e) => handleChange(e, "category")}
                  fullWidth
                />
                <br />
                <br />
                <MuiTextField
                  type="text"
                  multiline
                  rows={10}
                  onChange={(e) => handleChange(e, "content")}
                  value={values.content}
                  fullWidth
                  label="お問い合わせ内容を入力してください"
                />
                <br />
                <br />
                <MuiButton type="submit" variant="contained" fullWidth disabled={!isValid}>
                  送信する
                </MuiButton>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </SBoard>
  );
});

export default ContactBoard;

const SBoard = styled.div`
  z-index: 998;
  position: fixed;
  bottom: 0;
  right: 32px;
`;
const SContactButton = styled.div`
  z-index: 999;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  background: #00aa99;
  padding: 0 8px;
  transition: 0.3s;
  &:hover {
    background: #00766b;
  }
`;

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "900px",
    bgcolor: "background.paper",
    boxShadow: 12,
    p: 4,
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  icon: {
    position: "sticky",
    top: 0,
    bgcolor: "rgba(0,0,0,0.2)",
    color: "#fff",
    marginBottom: "32px",
    "&:hover": { bgcolor: "rgba(0,0,0,0.1)" },
  },
};
