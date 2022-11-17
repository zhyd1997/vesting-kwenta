import { FC } from "react";
import { Container } from "@/components/Container";

type AmountProps = {
  balance: string;
  price: string;
};

export const Amount: FC<AmountProps> = ({ balance, price }) => {
  const amount = (Number(balance) * Number(price)).toString();

  return (
    <Container>
      <p className="heading">Value</p>
      {(price !== '' && balance !== '') ? (
        <p>
          $&nbsp;
          <span className="dollars">
            {amount.split('.')[0]}
          </span>
          .
          <span className="cents">
            {amount.split('.')[1]}
          </span>
        </p>
      ) : (
        <p>-</p>
      )}
    </Container>
  );
};
