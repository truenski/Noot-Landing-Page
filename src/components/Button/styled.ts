import { stringify } from "querystring";
import styled from "styled-components";
import { theme } from "../../Theme";

const bg = theme.lightBlue;
const fg = theme.darkGreen;

export const Btn = styled.button<{ inverted?: boolean }>`
  box-shadow: 0px 0px 0px rgba(0, 221, 125, 0.32);
  border-radius: 20px;
  line-height: normal;
  text-transform: uppercase;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 0.8rem 1.6rem;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  color: ${(props) => (props.inverted ? bg : fg)};
  background: ${(props) => (props.inverted ? fg : bg)};
`;
