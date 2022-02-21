import Styles from "./button.module.css";

const index = (props) => {
  return (
    <button className={Styles.button} onClick={props.clicked}>
      {props.text}
    </button>
  );
};

export default index;
