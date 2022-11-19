import { FC } from "react";
import { Container } from "@/components/Container";

type PriceProps = {
  price: string;
};

export const Price: FC<PriceProps> = ({ price }) => {
  return (
    <Container>
      <a
        href="https://www.coingecko.com/en/coins/kwenta"
        target={"_blank"}
        rel="noreferrer"
      >
        <p className="heading">Price</p>
        <p>{price !== '' ? `$ ${price}` : '-'}</p>
      </a>
    </Container>
  );
};
