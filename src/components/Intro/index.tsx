import React from "react";
import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";
import { IntroContainer } from "./styled";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

type Props = {};

const Intro = (props: Props) => {
  return (
    <IntroContainer>
      <LeftContent />
      <MiddleContent />
      <RightContent />
    </IntroContainer>
  );
};
export default Intro;
