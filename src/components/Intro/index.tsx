import React from "react";
import LeftContent from "./LeftContent";
import MiddleContent from "./MiddleContent";
import RightContent from "./RightContent";
import { IntroContainer } from "./styled";

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
