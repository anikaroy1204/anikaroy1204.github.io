import { useState } from "react";
import Button from "./components/Button";
import myimg from "./assets/images/image.png";

const App = () => {
  const [alert, setAlert] = useState(false);
  return (
    <body>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: window.innerHeight }}
      >
        <Button onClick={() => setAlert(true)}>Didi is </Button>
        {alert && <h1> Gundu Pontu</h1>}
        <img src={myimg} alt="description" />
      </div>
    </body>
  );
};

export default App;
