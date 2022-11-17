import { FC, useState } from "react";
import { Container } from "@/components/Container";

type PriceProps = {};

export const Price: FC<PriceProps> = () => {
  const [price, setPrice] = useState('---');

  return (
    <Container>
      <p className="heading">Price</p>
      <p>$&nbsp;200.5728</p>
    </Container>
  );
};
