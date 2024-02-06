import filterByName from "../../lib/dataAccess";
import "./PostText.css";
export default function PostText(props: { title: string }) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className="description-text">{filterByName(props.title)}</p>
    </div>
  );
}
