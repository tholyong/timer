import Styles from "./Navigation.modules.css";

const Tab = (props) => {
  const clicked = () => {
    props.tabClicked(props.value);
  };
  return (
    <div className={Styles.tab} onClick={clicked}>
      {props.value}
    </div>
  );
};

export default Tab;
