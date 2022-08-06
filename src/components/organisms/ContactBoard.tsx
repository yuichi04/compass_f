import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { TextField, Grid } from "@mui/material";
import { theme } from "../../assets/theme";
import { LinkTo, PrimaryButton } from "../atoms";
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
      <SContactButton onClick={() => setIsOpen(true)}>
        <EmailIcon fontSize="small" sx={{ mr: "4px" }} />
        <Typography variant="subtitle2">お問い合わせ</Typography>
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
                  value={values.category}
                  onChange={(e) => handleChange(e, "category")}
                  fullWidth
                />
                <br />
                <br />
                <TextField
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
                <PrimaryButton type="submit" variant="contained" fullWidth disabled={!isValid}>
                  送信する
                </PrimaryButton>
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
  background: ${(props) => props.theme.palette.primary.main};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.typography.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px 8px 12px;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.palette.primary.dark};
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
