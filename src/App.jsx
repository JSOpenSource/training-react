import "./App.css";
import Card from "./Card";
import Form from "./Form";

function App() {
  const employees = [
    { name: "Sadanand", role: "Frontend dev" },
    { name: "Prathima", role: "Tech lead" },
    { name: "Ashwitha", role: "Backend dev" },
    { name: "Zeeyan", role: "Mobile dev" },
  ];
  
  return (
    <div>
      <h1> Hello, world</h1>

      {employees.map((e) => (
        <Card name={e.name} role={e.role} />
      ))}

      <Form />
    </div>
  );
}

export default App;
