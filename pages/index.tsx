import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Amount } from '@/components/Amount';
import { Price } from '@/components/Price';
import { Escrow } from '@/components/Escrow';
import { Balance } from '@/components/Balance';

export default function Home() {
  return (
    <div>
      <div>
        <ConnectButton />
      </div>
      <h1 className={styles.title}>Showed your <span className={styles.token}>Escrow Kwenta</span> Value</h1>
      <h2 className={styles.subtitle}>Vesting Date Left: TODO</h2>
      <div className={styles.container}>
        <Amount />
        <Price />
        <Balance />
        <Escrow />
      </div>
    </div>
  )
}
