import styles from "./footer.module.css";

const footer = (props) => {
  return <div className={styles.footer}>{props.words}</div>;
};

export default footer;
