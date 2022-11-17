import { FC } from "react";
import { Container } from "@/components/Container";

type EscrowProps = {};

export const Escrow: FC<EscrowProps> = () => {
  return (
    <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
      <Container style={{ width: '48%' }}>
        <p>Escrow</p>
        <p>0</p>
      </Container>

      <Container style={{ width: '48%' }}>
        <p>Staked Escrow</p>
        <p>47</p>
      </Container>
    </div>
  );
};
