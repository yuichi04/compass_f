// import React from "react";
// import styled, { css } from "styled-components";
// import { Box, Divider, Grid, Typography } from "@mui/material";
// import { MuiButton } from "../atoms";
// import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
// import { chapter1Selector, setSceneAction } from "../../lib/redux/features/chapter1Slice";
// import { userSelector } from "../../lib/redux/features/userSlice";

// const Chapter1Result: React.FC = React.memo(() => {
//   const dispatch = useAppDispatch();
//   const user = useAppSelector(userSelector);
//   const chapter1 = useAppSelector(chapter1Selector);
//   const username = user.name;
//   const sceneId = chapter1.id;
//   const resultData = chapter1.resultData;
//   const isOpenResult = chapter1.isOpenResult;
//   return (
//     <>
//       {isOpenResult && (
//         <SResult>
//           <SInner className="expand_center">
//             <Box textAlign="right" mb="16px">
//               <MuiButton variant="contained" onClick={() => dispatch(setSceneAction(sceneId))}>
//                 次に進む
//               </MuiButton>
//             </Box>
//             <Grid container mb="32px" bgcolor="#fff8e1" p="16px" borderRadius="8px">
//               <Grid item xs={5.8} textAlign="center">
//                 <SItemTitle>
//                   <Typography variant="subtitle1" fontWeight={600}>
//                     問い合わせ内容
//                   </Typography>
//                 </SItemTitle>
//                 <SItemInner>
//                   <Typography>
//                     英語が話せるようになりたい Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem cum iusto
//                     blanditiis culpa esse, corrupti ipsa voluptatum fugiat, in tenetur commodi ab reiciendis officia
//                   </Typography>
//                 </SItemInner>
//               </Grid>
//               <Grid item xs={0.4} display="flex" alignItems="center" justifyContent="center">
//                 <Divider orientation="vertical" />
//               </Grid>
//               <Grid item xs={5.8}>
//                 <SItemTitle>
//                   <Typography variant="subtitle1" fontWeight={600} textAlign="center">
//                     情報
//                   </Typography>
//                 </SItemTitle>
//                 <SItemInner>
//                   <Typography component="ul">
//                     {resultData.data.map((item, index) => (
//                       <Typography key={index} component="li">
//                         {item}
//                       </Typography>
//                     ))}
//                   </Typography>
//                 </SItemInner>
//               </Grid>
//             </Grid>
//             <Grid item xs={12} mb="32px">
//               <Divider />
//             </Grid>
//             <Grid container mb="16px" minHeight="calc(100% - 288px)">
//               <Grid item xs={5.8} textAlign="center" sx={{ wordBreak: "break-word" }}>
//                 <SSampleAnswerItem>
//                   <SItemSampleAnswerSubTitle>
//                     <Typography variant="subtitle1" fontWeight={600}>
//                       回答例
//                     </Typography>
//                   </SItemSampleAnswerSubTitle>
//                   <SItemInner>
//                     <Typography component="dl" mb="16px">
//                       <Typography variant="subtitle1" fontWeight={600} component="dt">
//                         共通するパターン
//                       </Typography>
//                       <Typography component="dd">{resultData.sampleCommonFactor}</Typography>
//                     </Typography>
//                     <Typography component="dl">
//                       <Typography variant="subtitle1" fontWeight={600} component="dt">
//                         結論
//                       </Typography>
//                       <Typography component="dd">{resultData.sampleAnswer}</Typography>
//                     </Typography>
//                   </SItemInner>
//                 </SSampleAnswerItem>
//               </Grid>
//               <Grid item xs={0.4} display="flex" alignItems="center" justifyContent="center">
//                 <Divider orientation="vertical" />
//               </Grid>
//               <Grid item xs={5.8} textAlign="center" sx={{ wordBreak: "break-word" }}>
//                 <SAnswerItem>
//                   <SItemAnswerSubTitle>
//                     <Typography variant="subtitle1" fontWeight={600}>
//                       {username}さんの回答
//                     </Typography>
//                   </SItemAnswerSubTitle>
//                   <SItemInner>
//                     <Typography component="dl" mb="16px">
//                       <Typography variant="subtitle1" fontWeight={600} component="dt">
//                         共通するパターン
//                       </Typography>
//                       <Typography component="dd">{resultData.commonFactor}</Typography>
//                     </Typography>
//                     <Typography component="dl">
//                       <Typography variant="subtitle1" fontWeight={600} component="dt">
//                         結論
//                       </Typography>
//                       <Typography component="dd">{resultData.answer}</Typography>
//                     </Typography>
//                   </SItemInner>
//                 </SAnswerItem>
//               </Grid>
//             </Grid>
//             <Box textAlign="right">
//               <MuiButton variant="contained" onClick={() => dispatch(setSceneAction(sceneId))}>
//                 次に進む
//               </MuiButton>
//             </Box>
//           </SInner>
//         </SResult>
//       )}
//     </>
//   );
// });

// export default Chapter1Result;

// const SItemStyle = css`
//   border-radius: 8px;
//   padding: 16px;
//   margin-bottom: 32px;
//   height: 100%;
// `;
// const ItemTitleStyle = css`
//   border-radius: 8px;
// `;

// const SResult = styled.div`
//   z-index: 999;
//   position: absolute;
//   background: rgba(0, 0, 0, 0.5);
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   height: 100%;
//   paddign: 32px;
// `;
// const SInner = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: calc(100% - 32px);
//   height: calc(100% - 32px);
//   background: #fff;
//   border-radius: 8px;
//   padding: 16px 32px;
//   overflow: scroll;
// `;
// const SAnswerItem = styled.div`
//   ${SItemStyle}
//   background: #e0f2f1;
// `;
// const SSampleAnswerItem = styled.div`
//   ${SItemStyle}
//   background: #eee;
// `;
// const SItemTitle = styled.div`
//   ${ItemTitleStyle};
//   background: #ffecb3;
// `;
// const SItemAnswerSubTitle = styled.div`
//   ${ItemTitleStyle}
//   background: #b2dfdb;
// `;
// const SItemSampleAnswerSubTitle = styled.div`
//   ${ItemTitleStyle}
//   background: #ccc;
// `;
// const SItemInner = styled.ul`
//   padding: 16px;
// `;

import { FC, memo } from "react";

const Chapter1Result: FC = memo(() => {
  return <div>Chapter1Result</div>;
});

export default Chapter1Result;
