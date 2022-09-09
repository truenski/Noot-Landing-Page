import React from "react";
import NootLink from "../NootLink";
import "../../pages/LadingPageNoot.css";
import { PageLink, PageLinksContainer } from "./styled";

type Props = {};

export const PageLinks = (props: Props) => {
  return (
    <PageLinksContainer>
      <NootLink>
        <PageLink>HOME</PageLink>
      </NootLink>
      <NootLink>
        <PageLink>SOBRE</PageLink>
      </NootLink>
      <NootLink>
        <PageLink>FUNCIONALIDADES</PageLink>
      </NootLink>
      <NootLink>
        <PageLink>CLIENTES</PageLink>
      </NootLink>
    </PageLinksContainer>
  );
};

export default PageLinks;
