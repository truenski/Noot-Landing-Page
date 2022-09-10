import React from "react";
import {
  GangBackgroundArt,
  LeftArt,
  LeftSideVector,
  MonkeyContainer,
  MonkeyFrame,
  MonkeyImg,
} from "./styled";

type Props = {};

const LeftContent = (props: Props) => {
  return (
    <LeftArt>
      <GangBackgroundArt
        data-aos="fade-up"
        className="prancheta-1-copiar-1"
        alt=""
        src="../../prancheta-1-copiar-1@2x.png"
      />
      <MonkeyFrame
        data-aos="fade-up"
        className="frame-icon7"
        alt=""
        src="../../frame7.svg"
      />
      <LeftSideVector
        data-aos="fade-up"
        className="vector-icon3"
        alt=""
        src="../../vector3.svg"
      />

      <MonkeyImg
        data-aos="fade-up"
        className="design-sem-nome-11-1"
        alt=""
        src="../../design-sem-nome-11-1@2x.png"
      />
    </LeftArt>
  );
};

export default LeftContent;
