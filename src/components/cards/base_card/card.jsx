import "./card.css";

export default function Card(props) {
  const width = `${props.width ?? 30}rem`;
  const height = `${props.height ?? 15}rem`;
  return (
    <article className="card-root" style={{ width: width, height: height }}>
      {props.children}
    </article>
  );
}
