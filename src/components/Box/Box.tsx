import { FC } from "react";


type BoxProps = {
 number: number,
 disabled: boolean | undefined,
 onClick: () => {}
}

const Box: FC<BoxProps> = ({number,disabled,  onClick}) => {
    return  <button  disabled={disabled} onClick={onClick}>{number}</button>
};

export default Box;