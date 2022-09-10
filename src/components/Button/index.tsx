import React, { ReactNode } from "react";
import NootLink from "../NootLink";
import { Btn } from "./styled";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
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
      <Btn
        data-aos="fade-in"
        style={props.inverted ? invertedColor : normalColor}
      >
        {props.children}
      </Btn>
    </NootLink>
  );
};
export default Button;
