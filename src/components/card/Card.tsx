import { FC, useEffect, useState } from 'react';
import styles from "./Card.module.css"
import * as func from "../../functions/Math.functions"
import Box from '../Box/Box';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "../../store/actionCreators"



const Card: FC = () => {
  const [numberA, setNumberA] = useState(0)
  const [numberB, setNumberB] = useState(0)
  const data: NumbersState = useSelector(state => state)
  console.log(data.numberA);
  
  const dispatch = useDispatch();

useEffect (() => {
    setNumberA(func.rundomNumber(10))
    setNumberB(func.rundomNumber(10))
    dispatch(actions.fillArray(10))

}, [])

// console.log(numbersArray);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["container-top"]}>
                <div className={styles["container-top-left"]}>
                    <span>X</span>
                </div>
                <div className={styles["container-top-right"]}>
                    <div className={styles["container-top-right-top"]}>
                    <span className={styles["numbers-top"]}>{numberA}</span>
                    </div>
                    <div>
                    <span className={styles["numbers-top"]}>{numberB}</span>
                    </div>
                </div>
            </div>
            <div className={styles["container-bottom"]}>
                <div className={styles["container-bottom-top"]}>
                    <span>Wrong</span>
                    <span>Choose Your Answer</span>
                </div>
                <div className={styles["numbers-bottom"]}> 
                    <div>
                        <Box />
                        <span>27</span>
                        <span>33</span>
                    </div>
                    <div>
                        <span>42</span>
                        <span>45</span>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;