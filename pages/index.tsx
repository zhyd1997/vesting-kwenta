import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { ethers } from 'ethers';

import rewardEscrowABI from '@/abi/RewardEscrow.json';
import stakingRewardsABI from '@/abi/StakingRewards.json';

import { useEffect, useState } from 'react';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Amount } from '@/components/Amount';
import { Price } from '@/components/Price';
import { Escrow } from '@/components/Escrow';
import { Balance } from '@/components/Balance';
import { useAccount, useContractReads } from 'wagmi';
import { getKwentaPrice } from '@/utils/getKwentaPrice';

const rewardEscrowContract = {
  address: '0x1066A8eB3d90Af0Ad3F89839b974658577e75BE2',
  abi: rewardEscrowABI,
};

const stakingRewardsContract = {
  address: '0x6e56A5D49F775BA08041e28030bc7826b13489e0',
  abi: stakingRewardsABI,
};

export default function Home() {
  const { address: account } = useAccount();

  const [price, setPrice] = useState('');

  const [escrowedBalance, setEscrowedBalance] = useState('');
  const [stakedEscrowedBalance, setStakedEscrowedBalance] = useState('');

  const [value, setValue] = useState('');

  useEffect(() => {
    if (!account) {
      setValue('');
      setEscrowedBalance('');
      setStakedEscrowedBalance('');
    }
  }, [account]);

  useEffect(() => {
    (async () => {
      const _price = await getKwentaPrice();

      if (_price) {
        setPrice(_price);
      }
    })();
  }, []);

  useEffect(() => {
    if (escrowedBalance && price) {
      const _value =  (Number(escrowedBalance) * Number(price)).toLocaleString('en-US', {minimumFractionDigits: 4});
      setValue(_value);
    }
  }, [escrowedBalance, price])

  useContractReads({
    contracts: [
      {
        ...rewardEscrowContract,
        functionName: 'balanceOf',
        args: [ account ],
      },
      {
        ...stakingRewardsContract,
        functionName: 'escrowedBalanceOf',
        args: [ account ],
      },
    ],
    enabled: !!account,
    watch: false,
    allowFailure: true,
    onSettled: (data, error) => {
      if (error) {
        console.error(error);
      }
      if (data) {
        const _escrowedBalance = ethers.utils.formatEther(data[0] as ethers.BigNumberish);
        const _stakedEscrowedBalance = ethers.utils.formatEther(data[1] as ethers.BigNumberish);

        setEscrowedBalance(_escrowedBalance);
        setStakedEscrowedBalance(_stakedEscrowedBalance);
      }
    },
  });

  return (
    <div>
      <div>
        <ConnectButton />
      </div>
      <h1 className={styles.title}>Showed your <span className={styles.token}>Escrow Kwenta</span> Value</h1>
      {/* <h2 className={styles.subtitle}>Vesting Date Left: TODO</h2> */}
      <div className={styles.container}>
        <Amount amount={value} />
        <Price price={price} />
        <Balance balance={escrowedBalance} />
        <Escrow escrowBalance={escrowedBalance} stakedEscrowBalance={stakedEscrowedBalance} />
      </div>
    </div>
  )
}
