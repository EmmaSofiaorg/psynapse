import cn from "../../utils/classnames";
import "./Button.css";

export default function Button({ onClick = () => null, children }) {
  return (
    <button
      onClick={onClick}
      className={cn({
        button: true,
      })}
    >
      {children}
    </button>
  );
}
