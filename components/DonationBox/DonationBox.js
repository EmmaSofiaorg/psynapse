import React from "react";
import "./DonationBox.css";
import Text from "../../primitives/Text";
import Link from "../../primitives/Link";
import Illustration from "../../public/assets/illustrations/shapes-in-row.svg";

export default function DonationBox() {
  return (
    <div className="donation-box">
      <div className="donation-box__column">
        <Text variant="label">Støtt oss</Text>
        <Text tag="h2" variant="heading-sm">
          Vi fortsetter å jobbe for et sunnere, mer åpent og tolerant samfunn.
        </Text>
        <Text tag="p" variant="body">
          Elit nulla vulputate natoque senectus vitae suspendisse eu at. Sit et
          sed a enim donec maecenas pulvinar morbi. Tristique rutrum nisl tellus
          enim pellentesque vitae. Mi volutpat sed tincidunt ipsum non.
        </Text>
        <Link full prefix="→">
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
