import React from "react";
import styled from "styled-components";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { useModal } from "../../hooks/useModal";
import { theme } from "../../assets/theme";
import { LinkTo, MuiButton, MuiTextField } from "../atoms";
import { useAppSelector } from "../../lib/redux/hooks";
import { userSelector } from "../../lib/redux/features/userSlice";

const ContactBoard: React.FC = React.memo(() => {
  const user = useAppSelector(userSelector);
  const { open, setOpen } = useModal();
  return (
    <SBoard>
      <MuiButton variant="contained" color="success" onClick={() => setOpen(true)}>
        <HelpOutlineIcon sx={{ mr: "4px" }} />
        お問い合わせ
      </MuiButton>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style.box}>
          <IconButton onClick={() => setOpen(false)} sx={style.icon} size="small">
            <CloseIcon />
          </IconButton>
          <Grid container spacing={4}>
            <Grid item xs={7}>
              <Typography>
                COMPASSをご利用頂きありがとうございます。 <br />
                ご不明点やご意見がございましたら、フォームよりご連絡ください。
                <br />
                <br />
                また、
                <Typography sx={{ color: "#33bbad" }} component="span" onClick={() => setOpen(false)}>
                  <LinkTo to="/help">ヘルプページ</LinkTo>
                </Typography>
                にサービスに関するご質問を記載しておりますので合わせてご確認ください。
                <br />
                <br />
                いただきましたご意見は、今後の開発に生かしてまいります。
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <MuiTextField type="email" value={user.email} onChange={() => null} fullWidth />
              <MuiTextField type="text" multiline rows={10} onChange={() => null} value="" fullWidth />
              <MuiButton variant="contained" fullWidth>
                送信する
              </MuiButton>
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
  right: 0;
`;

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "900px",
    height: "585px",
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
