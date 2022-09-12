import styled from "styled-components";
import { theme } from "../../Theme";

export const PageLink = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #e4f0f2;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 135px;
  @media (min-width: 1160px) {
    margin: 20px;
  }
`;

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.darkGreen};
  z-index: 10;
  padding: 2% 4% 0 4%;
  margin: 0;
`;

export const PageLinkButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 1160px) {
    display: none;
  }
`;

export const PageLinksContainer = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 auto;
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin: 20px;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #00dd7d;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 1160px) {
    display: none;
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #052727;
  text-align: left;
  height: ${({ open }) => (open ? "405px" : "0px")};
  padding: ${({ open }) => (open ? "2rem" : "0px")};
  overflow: hidden;
  z-index: 1;
  transition: all 0.2s linear;
  @media (max-width: 576px) {
    width: 100%;
  }

  @media (min-width: 1160px) {
    display: none;
  }

  a {
    font-size: 2rem;
    padding: 1.5rem 0;

    text-decoration: none;
    transition: height 0.3s linear;

    div {
      font-weight: bold;
    }

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
