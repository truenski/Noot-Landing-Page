import React from "react";
import Button from "../Button";
import {
  Content,
  EmeraldTitle,
  SmallText,
  SmallTextContainer,
  TitleContainer,
} from "./styled";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});
type Props = {};

const MiddleContent = (props: Props) => {
  return (
    <Content>
      <TitleContainer>
        <EmeraldTitle data-aos="fade-in">LOREM IPSUM E MAIS QUE</EmeraldTitle>
        <EmeraldTitle data-aos="fade-in">UM TEXTO SALVA VIDAS.</EmeraldTitle>
      </TitleContainer>
      <SmallTextContainer>
        <SmallText data-aos="fade-in">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SmallText>
      </SmallTextContainer>
      <Button>Cadastrar-se</Button>
    </Content>
  );
};

export default MiddleContent;
