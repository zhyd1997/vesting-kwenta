import { FC } from "react";
import { Container } from "@/components/Container";

type AmountProps = {
  amount: string;
};

export const Amount: FC<AmountProps> = ({ amount }) => {
  return (
    <Container>
      <p className="heading">Value</p>
      {(amount !== '') ? (
        <p>
          $&nbsp;
          <span className="dollars">
            {amount.split('.')[0]}
          </span>
          .
          <span className="cents">
            {amount.split('.')[1].slice(0, 4)}
          </span>
        </p>
      ) : (
        <p>-</p>
      )}
    </Container>
  );
};
