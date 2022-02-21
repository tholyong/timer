import Tab from "./tab";
import Styles from "./Navigation.modules.css";

const Navigation = (props) => {
  return (
    <div className={Styles.Navigation}>
      <Tab tabClicked={props.tabClicked} value={0} />
      <Tab tabClicked={props.tabClicked} value={1} />
      <Tab tabClicked={props.tabClicked} value={2} />
    </div>
  );
};

export default Navigation;
