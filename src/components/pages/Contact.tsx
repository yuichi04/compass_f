import React from "react";
import { Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MuiContaier from "../layouts/MuiContainer";
import { ChipWithText, IconWithPageTitle, MuiTextFieldWithAdornment, SelectBox } from "../molecules";
import { MuiButton, MuiTextField } from "../atoms";
import useContactBorad from "../../hooks/useContactBorad";

const options = [
  { value: "レッスン内容について", label: "レッスン内容について" },
  { value: "ご意見・ご要望", label: "ご意見・ご要望" },
  { value: "その他", label: "その他" },
];

const Contact: React.FC = () => {
  const { values, isValid, handleChange, handleSubmit } = useContactBorad();
  return (
    <>
      <MuiContaier maxWidth="md">
        <IconWithPageTitle title="お問い合わせフォーム" icon={EmailIcon} />
        <Typography textAlign="center">
          何かご不明なことや、ご意見・ご要望などございましたら、以下のフォームよりご連絡ください。
        </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <Box mb="8px">
            <ChipWithText text="メールアドレス" label="任意" size="small" color="info" variant="outlined" />
          </Box>
          <Box mb="16px">
            <MuiTextFieldWithAdornment
              onChange={(e) => handleChange(e, "email")}
              value={values.email}
              fullWidth
              icon={<EmailIcon />}
            />
          </Box>
          <Box mb="8px">
            <ChipWithText text="カテゴリ" label="必須" size="small" color="error" variant="outlined" />
          </Box>
          <Box mb="16px">
            <SelectBox
              label="- 選択してください -"
              category={values.category}
              options={options}
              onChange={(e) => handleChange(e, "category")}
              fullWidth
            />
          </Box>
          <Box mb="8px">
            <ChipWithText text="お問い合わせ内容" label="必須" size="small" color="error" variant="outlined" />
          </Box>
          <Box mb="16px">
            <MuiTextField
              onChange={(e) => handleChange(e, "content")}
              value={values.content}
              multiline
              rows={10}
              fullWidth
            />
          </Box>
          <MuiButton type="submit" variant="contained" disabled={!isValid} fullWidth>
            送信する
          </MuiButton>
        </form>
      </MuiContaier>
    </>
  );
};

export default Contact;
