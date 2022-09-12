import React from "react";
import { BrandContainer, BrandsGrid } from "./styled";

type Props = {};

const Brands = (props: Props) => {
  const srcArray = [
    "logo200h-1@2x.png",
    "outplaywhite-1@2x.png",
    "enxadahost-1-1@2x.png",
    "logo1-1@2x.png",
    "logogamersclub-1@2x.png",
    "3b25a89bce-1@2x.png",
  ];

  return (
    <BrandsGrid>
      {srcArray.map((src, key) => (
        <BrandContainer data-aos="fade-right">
          <img alt="brand" key={key} src={"../../" + src} />
        </BrandContainer>
      ))}
    </BrandsGrid>
  );
};

export default Brands;
