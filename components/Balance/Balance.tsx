import { FC } from "react";
import { Container } from "@/components/Container";

type BalanceProps = {
  balance: string;
};

export const Balance: FC<BalanceProps> = ({ balance }) => {
  return (
    <Container>
      <a 
        href="https://kwenta.eth.limo/dashboard/staking/"
        target={"_blank"}
        rel="noreferrer"
      >
        <p className="heading">Balance</p>
        <p>{balance ? balance : '-'}</p>
      </a>
    </Container>
  );
};
