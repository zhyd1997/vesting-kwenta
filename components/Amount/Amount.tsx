import { FC, useState } from "react";
import { Container } from "@/components/Container";

type AmountProps = {};

export const Amount: FC<AmountProps> = () => {
  const [amount, setAmount] = useState((200.5728*47).toFixed(4));

  return (
    <Container>
      <p className="heading">Value</p>
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
    </Container>
  );
};
