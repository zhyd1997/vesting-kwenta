import { FC } from "react";
import { Container } from "../Container";

type AmountProps = {};

export const Amount: FC<AmountProps> = () => {
  return (
    <Container>
      <p className="heading">Value</p>
      <p>$<span className="dollars">9400</span><span className="cents">.0000</span></p>
    </Container>
  );
};
