import React, { ReactNode } from "react";
import NootLink from "../NootLink";
import { Btn } from "./styled";

type Props = {
  children: ReactNode;
  inverted?: boolean;
};

const Button = (props: Props) => {
  const invertedColor = {
    backgroundColor: "#033434",
    color: "#50ece9",
  };

  const normalColor = {
    backgroundColor: "#50ece9",
    color: "#033434",
  };

  return (
    <NootLink>
      <Btn style={props.inverted ? invertedColor : normalColor}>
        {props.children}
      </Btn>
    </NootLink>
  );
};
export default Button;
