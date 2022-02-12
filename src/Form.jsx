import { useState } from "react";
import Card from "./Card";

function Form() {
  const [name, setName] = useState("Unknown");
  const [role, setRole] = useState("Developer");

  function changeName(event) {
    setName(event.target.value);
  }

  function changeRole(event) {
    setRole(event.target.value);
  }

  return (
    <div>
      <input onChange={changeName} type="text" value={name} />
      <input onChange={changeRole} type="text" value={role} />
      
      <Card name={name} role={role} />
    </div>
  );
}

export default Form;
