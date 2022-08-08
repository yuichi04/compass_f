import React, { FC, memo } from "react";
// modules
import styled from "styled-components";
import { Box, Grid, Icon, Paper, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  icon: React.ElementType;
  image: string;
  title: string;
};

const SlideListItemContent: FC<Props> = memo(({ children, ...props }) => {
  const { title, image, icon } = props;
  return (
    <SContainer elevation={8}>
      <SContentTitleBox>
        <Typography variant="h6" mr="4px">
          {title}
        </Typography>
        <Icon component={icon} />
      </SContentTitleBox>
      <Grid container>
        <SContentItemBox item xs={4}>
          <Box component="img" src={image} alt="illustration" height="100%" width="100%" />
        </SContentItemBox>
        <SContentItemBox item xs={8}>
          <Typography variant="subtitle1">{children}</Typography>
        </SContentItemBox>
      </Grid>
    </SContainer>
  );
});

export default SlideListItemContent;

// Styled-Components
const SContainer = styled(Paper)`
  position: relative;
  padding: 40px 32px 16px;
`;

const SContentTitleBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  background: ${(props) => props.theme.palette.primary.main};
  border-radius: 8px;
  box-shadow: 0 0 8px ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.typography.white};
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

const SContentItemBox = styled(Grid)`
  padding: 8px;
`;

/**
 *
 * slideList > slideListItem > slideListItemContent
 * データの取得＆mapでリストを回す > データを受け取ってテンプレートに流す >　データを受け取ってテンプレートに流す
 */
