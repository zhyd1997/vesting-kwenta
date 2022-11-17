import { FC, ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerProps = {
  style?: any;
  children: ReactNode;
};

export const Container: FC<ContainerProps> = ({ style, children }) => {
  return (
  <div className={styles.container} style={style}>
    {children}
  </div>
  );
};
