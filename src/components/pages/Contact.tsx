import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import MuiContaier from "../layouts/MuiContainer";
import { IconWithPageTitle, SelectBox } from "../molecules";
import { MuiButton, MuiTextField } from "../atoms";
import useContactBorad from "../../hooks/useContactBorad";
import { Typography } from "@mui/material";

const options = [
  { value: "レッスン内容について", label: "レッスン内容について" },
  { value: "ご意見・ご要望", label: "ご意見・ご要望" },
  { value: "その他", label: "その他" },
];

const Contact = () => {
  const { values, isValid, handleChange, handleSubmit } = useContactBorad();
  return (
    <>
      <MuiContaier maxWidth="md">
        <IconWithPageTitle title="お問い合わせ" icon={EmailIcon} />
        <Typography textAlign="center">
          何かご不明なことやご意見・ご要望などございましたら、以下のフォームよりご連絡ください。
        </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <MuiTextField
            onChange={(e) => handleChange(e, "email")}
            value={values.email}
            label="メールアドレス"
            fullWidth
          />
          <br />
          <br />
          <SelectBox
            label="- 選択してください -"
            category={values.category}
            options={options}
            onChange={(e) => handleChange(e, "category")}
            fullWidth
          />
          <br />
          <br />
          <MuiTextField
            onChange={(e) => handleChange(e, "content")}
            value={values.content}
            label="お問い合わせ内容を入力してください"
            multiline
            rows={10}
            fullWidth
          />
          <br />
          <br />
          <MuiButton type="submit" variant="contained" disabled={!isValid} fullWidth>
            送信する
          </MuiButton>
        </form>
      </MuiContaier>
    </>
  );
};

export default Contact;
