import React from "react";
import "./DonationBox.css";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import Illustration from "../../public/assets/illustrations/shapes-in-row.svg";

export default function DonationBox({ heading = "", ingress = "", body = "" }) {
  return (
    <div className="donation-box">
      <div className="donation-box__column">
        <Text variant="label">{heading}</Text>
        <Text tag="h2" variant="heading-sm">
          {ingress}
        </Text>
        <Text tag="p" variant="body">
          {body}
        </Text>
        <Link href="/stott" full prefix="→">
          Les mer
        </Link>
        <Illustration
          style={{ maxWidth: "200px", marginTop: "var(--space-xl)" }}
        />
      </div>
      <div>Column 2</div>
    </div>
  );
}
