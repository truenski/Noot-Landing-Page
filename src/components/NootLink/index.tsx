import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NootLink = (props: Props) => {
  return (
    <a
      href="https://www.noot.com.br/"
      style={{ textDecoration: "none", zIndex: "2" }}
    >
      {props.children}
    </a>
  );
};

export default NootLink;
