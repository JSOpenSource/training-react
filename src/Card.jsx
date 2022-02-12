function Card({ name, role }) {
  return (
    <div className="my-card">
      <div>Name: {name}</div>
      <div>Role: {role}</div>
    </div>
  );
}

export default Card;
