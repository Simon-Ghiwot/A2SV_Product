import { useState } from "react";

import "./Card.css";
const Card = ({ picture, title, author, summary, date }) => {
  const [likes, setLikes] = useState(0);
  const handleclick = () => {
    setLikes((prev) => prev + 1);
  };
  return (
    <section>
      <img src={process.env.PUBLIC_URL + picture} alt={"title"} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      {summary && <p>{summary}</p>}
      <h5>{date}</h5>
      <div>
        <button onClick={handleclick}>like</button>
        <p>{likes}</p>
      </div>
    </section>
  );
};

export default Card;
