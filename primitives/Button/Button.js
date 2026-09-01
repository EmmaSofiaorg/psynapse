import cn from "../../utils/classnames";

export default function Button({
  full,
  variant = "",
  onClick = () => null,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={cn({
        button: true,
        "button--full": full,
        [`button--${variant}`]: variant,
      })}
    >
      {children}
    </button>
  );
}
