// import React from "react";
// import styled from "styled-components";
// import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { chapter1Selector, setDocumentAction } from "../../lib/redux/features/chapter1Slice";
// import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";

// const Chapter1Document: React.FC = React.memo(() => {
//   const chapter1 = useAppSelector(chapter1Selector);
//   const dispatch = useAppDispatch();
//   const isOpenDocument = chapter1.isOpenDocument;
//   const section = chapter1.section;
//   return (
//     <>
//       {isOpenDocument &&
//         (section === 1 ? (
//           <Paper elevation={8} className="slide-up" sx={styles.paper}>
//             <Box textAlign="right">
//               <IconButton onClick={() => dispatch(setDocumentAction(false))}>
//                 <CancelIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="subtitle1" textAlign="center" p="0 16px">
//               英語が話せる人の勉強方法に関する資料
//             </Typography>
//             <Divider />
//             <SContentBox>
//               <Typography variant="body2">
//                 英語が話せる男女数百人に勉強方法のアンケートを取った結果以下のことが判明した。
//               </Typography>
//               <SContentItems>
//                 <Typography component="li" fontWeight={600}>
//                   音読を中心に学習している
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   英会話アプリやサービスなどを積極的に利用している
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   ネイティブと会話する機会を積極的に作っている
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   洋画や海外ドラマなどで実践的な英語を学ぶようにしている
//                 </Typography>
//               </SContentItems>
//             </SContentBox>
//           </Paper>
//         ) : (
//           <Paper elevation={8} className="slide-up" sx={styles.paper}>
//             <Box textAlign="right">
//               <IconButton onClick={() => dispatch(setDocumentAction(false))}>
//                 <CancelIcon />
//               </IconButton>
//             </Box>
//             <Typography variant="subtitle1" textAlign="center" p="0 16px">
//               お金を貯めた人に関する資料
//             </Typography>
//             <Divider />
//             <SContentBox>
//               <Typography variant="body2">
//                 英語が話せる男女数百人に勉強方法のアンケートを取った結果以下のことが判明した。
//               </Typography>
//               <SContentItems>
//                 <Typography component="li" fontWeight={600}>
//                   音読を中心に学習している
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   アプリやサービスを利用した英会話に力を入れている
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   生の英語に触れるため、ネイティブと話す機会を積極的に作っている
//                 </Typography>
//                 <Typography component="li" fontWeight={600}>
//                   洋画や海外ドラマなどで英語に触れる機会をできるだけ増やしている
//                 </Typography>
//               </SContentItems>
//               <Divider />
//               <SContentTips>
//                 <Typography variant="body2" mb="8px">
//                   ※もし英語を話したい方からお問い合わせがあった場合には、下記の「帰納法」を使ってみましょう。
//                 </Typography>
//                 <Typography variant="subtitle1" fontWeight={600} textAlign="center">
//                   帰納法
//                 </Typography>
//                 <SContentTipsItems>
//                   <Typography component="li" variant="body2">
//                     主語と述語に分ける
//                   </Typography>
//                   <Typography component="li" variant="body2">
//                     主語で共通する
//                   </Typography>
//                 </SContentTipsItems>
//               </SContentTips>
//             </SContentBox>
//           </Paper>
//         ))}
//     </>
//   );
// });

// export default Chapter1Document;

// // Material UI
// const styles = {
//   paper: {
//     position: "absolute",
//     top: "32px",
//     left: "8px",
//     width: "400px",
//     height: "533px",
//     background: "#fff8e1",
//     border: "1px solid #bbb",
//     borderRadius: "8px",
//     padding: "8px",
//     opacity: 0,
//   },
// };

// // Styled components
// const SContentBox = styled.div`
//   padding: 16px;
//   height: calc(100% - 80px);
//   width: 100%;
//   overflow: scroll;
// `;
// const SContentItems = styled.ul`
//   list-style: revert;
//   list-style-position: inside;
//   padding: 16px 0;
//   li {
//     margin-bottom: 8px;
//   }
// `;
// const SContentTips = styled.div`
//   padding: 16px 0;
// `;
// const SContentTipsItems = styled.ol`
//   list-style: revert;
//   list-style-position: inside;
// `;

import { FC, memo } from "react";

const Chapter1Document: FC = memo(() => {
  return <div>Chapter1Document</div>;
});

export default Chapter1Document;
