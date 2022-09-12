import styled from "styled-components";

export const SmallTextContainer = styled.div`
  text-align: center;
  color: #76b1bc;
  padding: 13px;
  width: 560px;
`;

export const TitleDescription = styled.div`
  padding: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 50px;
`;

export const SmallText = styled.p`
  line-height: 24px;
  display: inline-block;
  font-size: 1.125rem;
  outline: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 576px) {
    font-size: 1rem;
    width: 95vw;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Anton;

  letter-spacing: 0.02em;
  line-height: 60px;
  display: inline-block;
`;

export const EmeraldTitle = styled.p`
  color: #00dd7d;
  margin: 0;
  font-size: 3.125rem;
  font-family: Anton;

  @media (max-width: 576px) {
    font-size: 2.125rem;
  }
`;

export const AdvantagesContainer = styled.div<{ br: string }>`
  border: 2px solid #00dc7d;
  border-radius: ${(props) => props.br};
  width: 413px;
  height: 234px;
  padding: 10%;
  display: flex;
  align-items: center;
  svg {
    font-size: 74px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    width: 185px;
    height: 120px;

    svg {
      font-size: 44px;
      padding-right: 20px;
    }
  }
`;

export const AdvantageText = styled.p`
  font-size: 28px;
  color: #e4f0f2;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GridAdvantages = styled.div`
  display: grid;
  grid-template-areas:
    ". ."
    ". ."
    ". .";
  gap: 30px;
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
