import React, { useLayoutEffect } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import cn from "../../utils/classnames";
import "./Html.css";
import Text from "../Text";

const block = {
  p: (node) => (
    <Text tag="p" variant="body">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h1: (node) => (
    <Text tag="h1" variant="heading-md">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h2: (node) => (
    <Text tag="h2" variant="heading-sm">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h3: (node) => (
    <Text tag="h3" variant="heading-sub">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h4: (node) => (
    <Text tag="h4" variant="ingress">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h5: (node) => (
    <Text tag="h5" variant="label">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
  h6: (node) => (
    <Text tag="h6" variant="label">
      {node.children.map((child, index) =>
        convertNodeToElement(child, index, transform)
      )}
    </Text>
  ),
};

function transform(node, index) {
  console.log("node is why", node);
  return (
    block[node.name]?.(node, index, transform) ||
    convertNodeToElement(node, index, transform)
  );
}

export default function Html({ children }) {
  const classNames = cn({
    html: true,
  });

  return (
    <div className={classNames}>{ReactHtmlParser(children, { transform })}</div>
  );
}
