import cn from "../../utils/classnames";
import "./ButtonGroup.css";

export default function ButtonGroup({
  options = [],
  onChange = () => null,
  value = null,
}) {
  const name = Math.floor(Math.random() * 1000 + 1);

  return (
    <div className="button-group">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn({
            "button-group__item": true,
            "button-group__item--selected": value === option.value,
          })}
        >
          <input
            checked={value}
            name={name}
            onChange={() => onChange(option.value)}
            value={option.value}
            type="radio"
          ></input>
          {option.label}
        </label>
      ))}
    </div>
  );
}
