import React, { useState } from "react";
import NootLink from "../NootLink";
import PageLinks from "./pageLinks";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Content, Logo, PageLinkButtonContainer } from "./styled";
import Burger from "./Burger";
import SideMenu from "./SideMenu";

type Props = {};

const Header = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Content>
        <NootLink>
          <Logo alt="" src="../group-3.svg" />
        </NootLink>
        <PageLinkButtonContainer>
          <PageLinks />
          <Button>Estou Sobre Lorem Ipsum</Button>
        </PageLinkButtonContainer>
        <Burger open={open} setOpen={setOpen} />
      </Content>
      <SideMenu open={open} />
    </Container>
  );
};

export default Header;
