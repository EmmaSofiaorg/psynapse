import React from "react";
import cn from "../../utils/classnames";
import "./Grid.css";

export function Grid({ children, columns, columnsMobile, gap }) {
  const classes = cn({
    grid: true,
    [`grid--columns-${columns}`]: columns,
    [`grid--columns-mobile-${columnsMobile}`]: columnsMobile,
    [`grid--gap-${gap}`]: gap,
  });
  return <div className={classes}>{children}</div>;
}

export function GridItem({ children, style }) {
  const classes = cn({
    grid__item: true,
  });
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
