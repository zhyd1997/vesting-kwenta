import { FC } from "react";
import { Container } from "@/components/Container";

type EscrowProps = {
  escrowBalance: string;
  stakedEscrowBalance: string;
};

export const Escrow: FC<EscrowProps> = ({ escrowBalance, stakedEscrowBalance }) => {
  return (
    <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
      <Container style={{ width: '48%' }}>
        <p>Escrow</p>
        <p>{(Number(escrowBalance) - Number(stakedEscrowBalance)).toString()}</p>
      </Container>

      <Container style={{ width: '48%' }}>
        <p>Staked Escrow</p>
        <p>{stakedEscrowBalance ? stakedEscrowBalance : '-'}</p>
      </Container>
    </div>
  );
};
