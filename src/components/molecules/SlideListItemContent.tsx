import React, { FC, memo } from "react";
// Modules
import styled from "styled-components";
import { Box, Grid, Icon, Paper, Typography } from "@mui/material";
import { FlexType } from "../../types/styleTypes";

type Props = {
  children: React.ReactNode;
  display?: "block" | "inline-block" | "flex";
  icon: React.ElementType;
  iconSize?: string;
  image: string;
  title: string;
  imageXs?: number;
  spacing?: number;
  reverse?: boolean;
} & FlexType;

const SlideListItemContent: FC<Props> = memo(({ children, ...props }) => {
  const { title, image, icon, iconSize, imageXs, spacing, display, alignItems, justifyContent, reverse } = props;
  return (
    <SContainer elevation={8}>
      <SContentTitleBox>
        <Typography variant="h6" mr="4px">
          {title}
        </Typography>
        <Icon component={icon} sx={{ fontSize: iconSize }} />
      </SContentTitleBox>
      <Grid container spacing={spacing && spacing}>
        {reverse ? (
          <>
            <Grid
              item
              xs={imageXs ? 12 - imageXs : 8}
              display={display}
              alignItems={alignItems}
              justifyContent={justifyContent}
            >
              <Typography variant="subtitle1">{children}</Typography>
            </Grid>
            <Grid item xs={imageXs ? imageXs : 4}>
              <Box component="img" src={image} alt="illustration" height="100%" width="100%" />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={imageXs ? imageXs : 4}>
              <Box component="img" src={image} alt="illustration" height="100%" width="100%" />
            </Grid>
            <Grid
              item
              xs={imageXs ? 12 - imageXs : 8}
              display={display}
              alignItems={alignItems}
              justifyContent={justifyContent}
            >
              <Typography variant="subtitle1">{children}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </SContainer>
  );
});

export default SlideListItemContent;

// Styled-Components
const SContainer = styled(Paper)`
  position: relative;
  padding: 32px;
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
