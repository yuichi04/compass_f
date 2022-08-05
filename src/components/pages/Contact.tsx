import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import MuiContaier from "../layouts/MuiContainer";
import { ChipWithText, IconWithPageTitle, TextFieldWithAdornment, SelectBox } from "../molecules";
import { PrimaryButton } from "../atoms";
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
            <TextFieldWithAdornment
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
              value={values.category}
              options={options}
              onChange={(e) => handleChange(e, "category")}
              fullWidth
            />
          </Box>
          <Box mb="8px">
            <ChipWithText text="お問い合わせ内容" label="必須" size="small" color="error" variant="outlined" />
          </Box>
          <Box mb="16px">
            <TextField
              type="text"
              onChange={(e) => handleChange(e, "content")}
              value={values.content}
              multiline
              rows={10}
              fullWidth
            />
          </Box>
          <PrimaryButton type="submit" variant="contained" disabled={!isValid} fullWidth>
            送信する
          </PrimaryButton>
        </form>
      </MuiContaier>
    </>
  );
};

export default Contact;
