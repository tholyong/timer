import Styles from "./clock.module.css";

const Clock = (props) => {
  return (
    <div className={Styles.circle}>
      <div className={Styles.display}>{props.time}</div>
    </div>
  );
};

export default Clock;
