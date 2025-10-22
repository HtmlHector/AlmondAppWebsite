import { Link } from "react-router-dom";

export default function Button({ isPrimary, children, Path }) {
  return (
    <Link to={"/join"}>
      <button className={isPrimary ? "btn_primary" : "btn_secondary"}>
        {children}
      </button>
    </Link>
  );
}
