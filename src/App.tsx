import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <div>
        <Button color="primary" onClick={() => setAlert(true)}>
          Gundu
        </Button>
        {alert && <h1>Pontu</h1>}
      </div>
    </>
  );
}

export default App;
