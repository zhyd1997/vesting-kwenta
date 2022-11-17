import { FC, useEffect, useState } from "react";
import { getKwentaPrice } from "@/utils/getKwentaPrice";
import { Container } from "@/components/Container";

type PriceProps = {};

export const Price: FC<PriceProps> = () => {
  const [price, setPrice] = useState('---');

  useEffect(() => {
    (async () => {
      const res = await getKwentaPrice();

      console.log(res);
    })()
  }, []);

  return (
    <Container>
      <p className="heading">Price</p>
      <p>$&nbsp;200.5728</p>
    </Container>
  );
};
