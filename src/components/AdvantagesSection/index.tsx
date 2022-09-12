import { faShield, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Advantages from "./Advantages";
import {
  EmeraldTitle,
  SmallText,
  SmallTextContainer,
  TitleContainer,
  TitleDescription,
} from "./styled";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <TitleDescription>
        <TitleContainer>
          <EmeraldTitle>PROTEÇÃO PARA ATAQUES DE LOREM IPSUM.</EmeraldTitle>
        </TitleContainer>

        <SmallTextContainer>
          {" "}
          <SmallText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </SmallText>
        </SmallTextContainer>
      </TitleDescription>
      <Advantages />
    </div>
  );
};

export default index;
