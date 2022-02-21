// import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";
// import Card from "./components/Card/card";
import { useState } from "react";
import styles from "./App.module.css";

import Stopwatch from "./components/Stopwatch";
import Navigation from "./components/Navigation";

function App() {
  const [tab, setTab] = useState(0);

  let toolComponent = null;
  if (tab === 0) {
    toolComponent = <div>clock</div>;
  } else if (tab === 1) {
    toolComponent = <Stopwatch />;
  } else if (tab === 2) {
    toolComponent = <div>timer</div>;
  }

  return (
    <div className={styles.app}>
      <Navigation tabClicked={setTab} />
      {toolComponent}
    </div>
  );
}

export default App;
