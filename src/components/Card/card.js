import { useState } from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const [value, setValue] = useState(0); // variable

  const newString = props.content + " " + value;

  const buttonClicked = () => {
    // javascript function
    setValue(value + 1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.content}>{newString}</div>
      <div>
        <button className={styles.url} onClick={buttonClicked}>
          click me
        </button>
      </div>
    </div>
  );
};

export default Card;
