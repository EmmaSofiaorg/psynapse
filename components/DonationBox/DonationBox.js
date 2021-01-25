import React, { useState } from "react";
import "./DonationBox.css";
import Text from "../../primitives/Text";
import Input from "../../primitives/Input";
import ButtonGroup from "../../primitives/ButtonGroup";
import Button from "../../primitives/Button";
import Link from "../../primitives/Link";
import Illustration from "../../public/assets/illustrations/shapes-in-row.svg";

export default function DonationBox({ heading = "", ingress = "", body = "" }) {
  const [donationOption, setDonationOption] = useState("monthly");
  const [donationValue, setDonationValue] = useState(100);
  const [loading, setLoading] = useState(false);

  function donate() {
    setLoading(true);
    fetch("/api/donate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        amount: donationValue,
      }),
    })
      .then((res) =>
        res.json().then((data) => {
          window.location = data.url;
        })
      )
      .catch((e) => {
        setLoading(false);
      });
  }

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
      <div>
        <ButtonGroup
          value={donationOption}
          onChange={setDonationOption}
          options={[
            { label: "Gi månedlig", value: "monthly" },
            { label: "Gi én gang", value: "once" },
          ]}
        />
        <ButtonGroup
          value={donationValue}
          onChange={setDonationValue}
          options={[
            { label: "100kr", value: 100 },
            { label: "250kr", value: 250 },
            { label: "500kr", value: 500 },
          ]}
        />

        <Input
          onChange={(e) => setDonationValue(Number(e.target.value))}
          type="tel"
          placeholder="Eller skriv inn et valgfritt beløp"
          postfix="kr"
          full
        />

        <Button onClick={() => donate()}>
          {loading ? "Vennligst vent" : "Gi med vipps"}
        </Button>
      </div>
    </div>
  );
}
