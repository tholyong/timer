import styles from "./title.module.css";

const Title = (props) => {
  return <div className={styles.title}>{props.name}</div>;
};

export default Title;
