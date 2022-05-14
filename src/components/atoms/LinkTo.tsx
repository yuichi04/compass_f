import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to: string;
  target?: "_blank";
};

const LinkTo: React.FC<Props> = React.memo(({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
});

export default LinkTo;
