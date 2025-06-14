import { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [alert, setAlert] = useState(false);
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: window.innerHeight }}
    >
      <Button onClick={() => setAlert(true)}>Didi is </Button>
      {alert && <h1> Gundu Pontu</h1>}
    </div>
  );
};

export default App;
