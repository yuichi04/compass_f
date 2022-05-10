import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = React.memo((props) => {
  const { title } = props;
  return <SH1>{title}</SH1>;
});

export default PageTitle;

const SH1 = styled.h1`
  text-align: center;
`;
