import { FC } from "react";
import { Container } from "../Container";

type PriceProps = {};

export const Price: FC<PriceProps> = () => {
  return (
    <Container>
      <p className="heading">Price</p>
      <p>200</p>
    </Container>
  );
};
