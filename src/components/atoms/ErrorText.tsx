import React from "react";
import styled from "styled-components";

type Props = { text: string };

const ErrorText: React.FC<Props> = React.memo((props) => {
  return <SText>{props.text}</SText>;
});

export default ErrorText;

const SText = styled.p`
  color: #c62828;
  text-align: center;
`;
