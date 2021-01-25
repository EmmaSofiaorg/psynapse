import React from "react";
import cn from "../../utils/classnames";
import "./Input.css";

export default function Input({
  full,
  size,
  prefix,
  postfix,
  label,
  onChange,
  ...rest
}) {
  const classNames = cn({
    input: true,
    [`input--${size}`]: size,
    "input--full": full,
  });

  return (
    <div className={classNames}>
      {label && <label className="input__label">{label}</label>}
      <div className="input__field">
        {prefix && <span className="input__prefix">{prefix}</span>}
        <input {...rest} onChange={onChange} />
        {postfix && <span className="input__postfix">{postfix}</span>}
      </div>
    </div>
  );
}
