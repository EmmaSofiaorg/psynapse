import React, { useLayoutEffect } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import cn from "../../utils/classnames";
import "./Html.css";
import Text from "../Text";
import Link from "../Link";

function transform(node, index) {
  return (
    block[node.name]?.(node, index, transform) ||
    convertNodeToElement(node, index, transform)
  );
}

const block = {
  p: (node, index) => {
    return (
      <Text key={index} tag="p" variant="body">
        {node.children.map((child, index) =>
          transform(child, index, transform)
        )}
      </Text>
    );
  },
  a: (node, index) => {
    console.log({ node, index });
    if (!node.prev && !node.next && node.parent.name === "p") {
      return (
        <Link key={index} href={node.attribs.href} prefix="→">
          {node.children.map((child, index) =>
            transform(child, index, transform)
          )}
        </Link>
      );
    } else {
      return (
        <Link href={node.attribs.href} key={index}>
          {node.children.map((child, index) =>
            transform(child, index, transform)
          )}
        </Link>
      );
    }
  },
  h1: (node, index) => (
    <Text key={index} tag="h1" variant="heading-md">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
  h2: (node, index) => (
    <Text key={index} tag="h2" variant="heading-sm">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
  h3: (node, index) => (
    <Text key={index} tag="h3" variant="heading-sub">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
  h4: (node, index) => (
    <Text key={index} tag="h4" variant="ingress">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
  h5: (node, index) => (
    <Text key={index} tag="h5" variant="label">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
  h6: (node, index) => (
    <Text key={index} tag="h6" variant="label">
      {node.children.map((child, index) => transform(child, index, transform))}
    </Text>
  ),
};

export default function Html({ children, columns, style }) {
  const classNames = cn({
    html: true,
    "html--columns-2": columns === "2",
  });

  return (
    <div style={style} className={classNames}>
      {ReactHtmlParser(children, { transform })}
    </div>
  );
}
