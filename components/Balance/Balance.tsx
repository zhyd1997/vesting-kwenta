import { FC } from "react";
import { Container } from "../Container";

type BalanceProps = {};

export const Balance: FC<BalanceProps> = () => {
  return (
    <Container>
      <p className="heading">Balance</p>
      <p>47</p>
    </Container>
  );
};
