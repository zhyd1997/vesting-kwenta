import { FC } from "react";
import { Container } from "@/components/Container";

type BalanceProps = {
  balance: string;
};

export const Balance: FC<BalanceProps> = ({ balance }) => {
  return (
    <Container>
      <p className="heading">Balance</p>
      <p>{balance ? balance : '-'}</p>
    </Container>
  );
};
