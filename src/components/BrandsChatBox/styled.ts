import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  z-index: 1;
  margin-top: -210px;
  @media (max-width: 576px) {
    margin-top: 30vh;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  margin: 0;
  gap: 15px;
`;

export const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background: white;
  border-radius: 0 150px 150px 150px;
  width: 1053px;
  height: 617px;

  @media (max-width: 768px) {
    border-radius: 0;
    flex-direction: column;
    height: 100%;
    padding: 40px 0;
  }
`;

export const BrandContainer = styled.div`
  background-color: #dde8ea;
  width: 183px;
  height: 122px;
  z-index: 1;
  padding: 30px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (max-width: 768px) {
    width: 150px;
    height: 90px;
  }
  img {
    z-index: 1;
    max-height: 80px;
    max-width: 140px;

    @media (max-width: 768px) {
      max-height: 60px;
      max-width: 110px;
    }
  }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-areas:
    ". ."
    ". ."
    ". .";
  gap: 20px 15px;
  display: grid;
  align-items: center;
  align-content: center;
`;

export const TitleContainer = styled.div`
  width: max-content;
  z-index: 1;
  height: 2.98%;
  width: 12.71%;
  font-size: 48px;
  color: #033434;
  font-family: Anton;

  p {
    width: max-content;

    br:last-child {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const SmallTextContainer = styled.div`
  z-index: 1;
  height: 167px;
  color: #457f7e;
`;
/*
.enxadahost-1-1-icon, .outplay-white-1-icon 


.logo-1-1-icon
.logo-gamersclub-1-icon
.logo-200h-1-icon
b25a89bce-1-icon
design-sem-nome-4-1*/
