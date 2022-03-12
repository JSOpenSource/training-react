export default function Form({ id, setId }) {
  return <input onChange={(e) => setId(e.target.value)} type="text" value={id} />;
}
