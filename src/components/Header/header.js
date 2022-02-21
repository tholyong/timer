import styles from "./header.module.css";

const header = (props) => {
  return <div className={styles.header}>{props.title}</div>;
};

export default header;
