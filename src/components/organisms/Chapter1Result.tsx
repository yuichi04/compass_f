import React from "react";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { LinkTo } from "../atoms";
import { useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector } from "../../lib/redux/features/chapter1Slice";
import CancelIcon from "@mui/icons-material/Cancel";

const Chapter1Result: React.FC = React.memo(() => {
  const selector = useAppSelector(chapter1Selector);
  const userAnswerList = selector.userAnswerList;
  const isOpenResult = selector.isOpenResult;
  return (
    <>
      {isOpenResult && (
        <Box
          zIndex={999}
          position="absolute"
          bgcolor="rgba(0,0,0,0.5)"
          top="50%"
          left="50%"
          width="100%"
          height="100%"
          sx={{ transform: "translate(-50%, -50%)" }}
        >
          <Box
            className="expand_center"
            sx={{
              zIndex: 999,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "90%",
              bgcolor: "#fff",
              boxShadow: 12,
              p: "16px 32px",
              overflow: "scroll",
            }}
          >
            <Box textAlign="right">
              <LinkTo to="/">
                <IconButton>
                  <CancelIcon fontSize="large" />
                </IconButton>
              </LinkTo>
            </Box>
            <Grid container height="calc(100% - 64px)" overflow="scroll">
              <Grid item xs={5.7} bgcolor="#f9fbe7" p="16px" textAlign="center" sx={{ wordBreak: "break-word" }}>
                <Typography textAlign="center" variant="h6" fontWeight={600}>
                  あなたの回答
                </Typography>
                <ul>
                  {userAnswerList.map((answer) => (
                    <li key={answer.id}>
                      <Divider />
                      <Typography variant="h6">第{answer.id}問</Typography>
                      <ul>
                        {answer.questions.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                      <br />
                      <Typography variant="h6">あなたの回答</Typography>
                      <Typography variant="h6">{answer.answer}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
                <Divider orientation="vertical" />
              </Grid>
              <Grid item xs={5.7} bgcolor="#e0f2f1" p="16px" textAlign="center" sx={{ wordBreak: "break-word" }}>
                <Typography textAlign="center" variant="h6" fontWeight={600}>
                  回答例
                </Typography>
                <ul>
                  {userAnswerList.map((answer) => (
                    <li key={answer.id}>
                      <Divider />
                      <Typography variant="h6">第{answer.id}問</Typography>
                      <ul>
                        {answer.questions.map((question) => (
                          <li key={question}>{question}</li>
                        ))}
                      </ul>
                      <br />
                      <Typography variant="h6">あなたの回答</Typography>
                      <Typography variant="h6">{answer.answer}</Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
});

export default Chapter1Result;
