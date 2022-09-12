import React from "react";
import Brands from "./Brands";
import {
  ChatBoxContainer,
  Container,
  SmallTextContainer,
  Texts,
  TitleContainer,
} from "./styled";

type Props = {};

const BrandsChatBox = (props: Props) => {
  return (
    <Container>
      <ChatBoxContainer>
        <Texts>
          <TitleContainer>
            <p>
              ATÉ LOREM
              <br /> IPSUM,
              <br />
              CONFIA.
            </p>
          </TitleContainer>

          <SmallTextContainer>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </div>
          </SmallTextContainer>
        </Texts>
        <Brands />
      </ChatBoxContainer>
    </Container>
  );
};

export default BrandsChatBox;
