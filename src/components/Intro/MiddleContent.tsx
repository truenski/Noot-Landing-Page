import React from "react";
import Button from "../Button";

type Props = {};

const MiddleContent = (props: Props) => {
  return (
    <div className="">
      <div className="fonte-para-titulos">
        <div className="at-mesmo-de-mltiplos-terabit">
          <p className="configure-regras">LOREM IPSUM E MAIS QUE</p>
          <p className="ipsum">UM TEXTO SALVA VIDAS.</p>
        </div>
      </div>
      <div className="para-textos-corridos-rubik2">
        <div className="lorem-ipsum-dolor-sit-amet-co2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <Button>Cadastrar-se</Button>
    </div>
  );
};

export default MiddleContent;
