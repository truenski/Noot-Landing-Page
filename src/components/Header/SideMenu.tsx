import Button from "../Button";
import NootLink from "../NootLink";
import { PageLink, StyledMenu } from "./styled";

type Props = { open: boolean };
const SideMenu = ({ open }: Props) => {
  return (
    <StyledMenu open={open}>
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
      <Button inverted children={"Estou sobre Lorem ipsum"} />
    </StyledMenu>
  );
};

export default SideMenu;
