import {
  faShieldVirus,
  faRocket,
  faBan,
  faChartLine,
  faMeteor,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { AdvantagesContainer, AdvantageText, GridAdvantages } from "./styled";

type Props = {};

const Advantages = (props: Props) => {
  const brValue = " 3rem ";

  const borderRadius = [
    "0" + brValue.repeat(3),
    brValue + "0" + brValue.repeat(2),
    brValue.repeat(3) + "0",
    brValue.repeat(2) + "0" + brValue,
  ];

  const arrIcons = [
    {
      i: faShieldVirus,
      p: "Controle tudo pelo nosso lorem ipsum.",
      br: borderRadius[0],
    },
    { i: faRocket, p: "Configure regras Lorem ipsum.", br: borderRadius[1] },
    {
      i: faBan,
      p: "Bloqueie portas não utilizadas em lorem ipsum.",
      br: borderRadius[2],
    },
    {
      i: faChartLine,
      p: "Aplique lorem ipsum e muito mais.",
      br: borderRadius[3],
    },
    { i: faMeteor, p: "Capacidade alta em lorem ipsum.", br: borderRadius[0] },
    {
      i: faUserAstronaut,
      p: "Interconexões com lorem ipsum.",
      br: borderRadius[1],
    },
  ];

  return (
    <GridAdvantages>
      {arrIcons.map((iconAndPhrase, key) => (
        <AdvantagesContainer br={iconAndPhrase.br} data-aos="fade-right">
          <FontAwesomeIcon icon={iconAndPhrase.i} />
          <AdvantageText>{iconAndPhrase.p}</AdvantageText>
        </AdvantagesContainer>
      ))}
    </GridAdvantages>
  );
};

export default Advantages;
