import { SetStateAction, useState } from "react";
import styled from "styled-components";
import { StyledBurger } from "./styled";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};
const Burger = ({ open, setOpen }: Props) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
