import { useState, useEffect } from "react";
import "./Card.css";

function Card({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((r) => r.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [id]);

  return (
    <div className="my-card">
      <div>Id: {data?.id}</div>
      <div>Name: {data?.title}</div>
    </div>
  );
}

export default Card;
