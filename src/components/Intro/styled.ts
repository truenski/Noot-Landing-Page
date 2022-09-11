import styled from "styled-components";

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 51px;
  justify-content: center;
`;
export const LeftArt = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;
export const Content = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: -250px;
  @media (max-width: 576px) {
    margin-top: 250px;
  }
`;
export const RightArt = styled.div`
  position: relative;
  @media (max-width: 576px) {
    display: none;
  }
`;

export const GangBackgroundArt = styled.img`
  width: 534px;
  height: 534px;
  object-fit: cover;
`;

export const LeftSideVector = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  top: 160px;
  left: -210px;
  width: 240px;
  overflow: hidden;
  margin-top: -240px;
`;

export const MonkeyFrame = styled.img`
  overflow: hidden;
  width: 185px;
  position: relative;
  bottom: 71px;
  left: 213px;
`;

export const MonkeyImg = styled.img`
  object-fit: cover;
  width: 258px;
  position: relative;
  bottom: 328px;
  right: -186px;
`;

export const MonkeyContainer = styled.div``;

//MIDDLE CONTENT

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
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 2.125rem;
  }
`;

export const SmallTextContainer = styled.div`
  text-align: center;
  color: #76b1bc;
  padding: 13px;
  width: 560px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
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

//RIGHTSIDECONTENT

export const MinecraftSwordsmanFrame = styled.img`
  width: 185px;
  height: 176px;
  overflow: hidden;
  z-index: 1;

  position: relative;
  top: 58px;
  left: 187px;
`;

export const MinecraftSwordsman = styled.img`
  width: 154px;
  height: 206px;
  object-fit: cover;
  position: relative;
  top: 78px;
  left: 18px;
  z-index: 1;
`;

export const MinecraftSwordsmanContainer = styled.div``;

export const RightSideVector = styled.img`
  z-index: 1;
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  top: 167px;
  right: -30px;
`;

export const BeesMinecraftBackgroundArt = styled.img`
  width: 543px;
  height: 543px;
  object-fit: cover;
`;
