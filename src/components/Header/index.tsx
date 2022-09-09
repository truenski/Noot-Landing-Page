import React from "react";
import NootLink from "../NootLink";
import PageLinks from "./pageLinks";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Content, Logo } from "./styled";

type Props = {};

const Header = (props: Props) => {
  return (
    <Container>
      <Content>
        <NootLink>
          <Logo alt="" src="../group-3.svg" />
        </NootLink>
        <PageLinks />
        <Button>Estou Sobre Lorem Ipsum</Button>
      </Content>
    </Container>
  );
};

export default Header;
