import { FC } from "react";
import styles from './Box.module.css';

type BoxProps = {
 number: number,
 disabled: boolean | undefined,
 onClick: () => {}
}

const Box: FC<BoxProps> = ({number,disabled,  onClick}) => {
    return  <button className={styles["my-node"]} disabled={disabled} onClick={onClick}>{number}</button>
    };

export default Box;