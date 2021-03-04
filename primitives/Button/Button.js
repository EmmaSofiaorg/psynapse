import cn from "../../utils/classnames";
import "./Button.css";

export default function Button({
  variant = "",
  onClick = () => null,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={cn({
        button: true,
        [`button--${variant}`]: variant,
      })}
    >
      {children}
    </button>
  );
}
