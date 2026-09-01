import React from "react";
import parse, { domToReact, Element } from "html-react-parser";
import cn from "../../utils/classnames";
import Text from "../Text";
import Link from "../Link";
import Button from "../Button";

const children = (node) => domToReact(node.children, options);

const block = {
  p: (node) => (
    <Text tag="p" variant="body">
      {children(node)}
    </Text>
  ),
  button: (node) => <Button variant="primary">{children(node)}</Button>,
  a: (node) => {
    // A link that is the sole content of its paragraph, or that is trailed by a
    // literal newline glyph, reads as a standalone call to action and gets an
    // arrow prefix.
    const isLast =
      (!node.prev && !node.next && node.parent?.name === "p") ||
      (node.next && node.next.data === "↵");

    return (
      <Link href={node.attribs.href} prefix={isLast ? "→" : null}>
        {children(node)}
      </Link>
    );
  },
  h1: (node) => (
    <Text tag="h1" variant="heading-md">
      {children(node)}
    </Text>
  ),
  h2: (node) => (
    <Text tag="h2" variant="heading-sm">
      {children(node)}
    </Text>
  ),
  h3: (node) => (
    <Text tag="h3" variant="heading-sub">
      {children(node)}
    </Text>
  ),
  h4: (node) => (
    <Text tag="h4" variant="ingress">
      {children(node)}
    </Text>
  ),
  h5: (node) => (
    <Text tag="h5" variant="label">
      {children(node)}
    </Text>
  ),
  h6: (node) => (
    <Text tag="h6" variant="label">
      {children(node)}
    </Text>
  ),
};

const options = {
  replace: (node) => {
    if (!(node instanceof Element)) return;
    return block[node.name]?.(node);
  },
};

export default function Html({ children: html, columns, style, noMargin }) {
  const classNames = cn({
    html: true,
    "html--no-margin": noMargin,
    "html--columns-2": columns === "2",
  });

  return (
    <div style={style} className={classNames}>
      {typeof html === "string" ? parse(html, options) : null}
    </div>
  );
}
