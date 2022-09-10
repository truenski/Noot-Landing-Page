import React from "react";
import {
  BeesMinecraftBackgroundArt,
  MinecraftSwordsman,
  MinecraftSwordsmanContainer,
  MinecraftSwordsmanFrame,
  RightArt,
  RightSideVector,
} from "./styled";

type Props = {};

const RightContent = (props: Props) => {
  return (
    <RightArt>
      <MinecraftSwordsmanFrame
        data-aos="fade-down"
        alt=""
        src="../../frame8.svg"
      />
      <MinecraftSwordsman
        data-aos="fade-down"
        alt=""
        src="../../imagembonecosminecraftpngstevepng-1@2x.png"
      />

      <RightSideVector data-aos="fade-down" alt="" src="../../vector4.svg" />

      <BeesMinecraftBackgroundArt
        data-aos="fade-down"
        alt=""
        src="../../1-1@2x.png"
      />
    </RightArt>
  );
};

export default RightContent;
