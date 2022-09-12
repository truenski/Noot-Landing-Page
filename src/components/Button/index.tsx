import React, { ReactNode } from "react";
import NootLink from "../NootLink";
import { Btn } from "./styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { theme } from "../../Theme";
import { ThemeProvider } from "styled-components";
AOS.init({
  duration: 1200,
});
type Props = {
  children: ReactNode;
  inverted?: boolean;
};

const Button = (props: Props) => {
  return (
    <NootLink>
      <Btn inverted={props.inverted} data-aos="fade-in">
        {props.children}{" "}
      </Btn>
    </NootLink>
  );
};
export default Button;
