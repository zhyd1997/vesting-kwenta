import { FC } from "react";
import { Container } from "@/components/Container";

type PriceProps = {
  price: string;
};

export const Price: FC<PriceProps> = ({ price }) => {
  return (
    <Container>
      <p className="heading">Price</p>
      <p>{price !== '' ? `$ ${price}` : '-'}</p>
    </Container>
  );
};
