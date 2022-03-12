import "./App.css";
import Card from "./components/Card/Card";
import Form from "./Form";
import {useState} from "react";

function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <h1>Employees Details</h1>
      <Form id={id} setId={setId} />
      <Card id={id} />
    </div>
  );
}

export default App;
