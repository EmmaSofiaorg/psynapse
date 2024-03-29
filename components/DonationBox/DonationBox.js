import React, { useEffect, useState } from "react";
import "./DonationBox.css";
import Text from "../../primitives/Text";
import Input from "../../primitives/Input";
import ButtonGroup from "../../primitives/ButtonGroup";
import Button from "../../primitives/Button";
import Link from "../../primitives/Link";
import Illustration from "../../public/assets/illustrations/shapes-in-row.svg";
import Html from "../../primitives/Html";

export default function DonationBox({ heading = "", ingress = "", body = "" }) {
  const [donationFrequency, setDonationFrequency] = useState("once");
  const [donationSize, setDonationSize] = useState("small");
  const [donationValue, setDonationValue] = useState(100);
  const [loading, setLoading] = useState(false);

  const donationsOptions = [
    { label: "100kr", value: "small", amount: 100 },
    { label: "250kr", value: "medium", amount: 250 },
    { label: "500kr", value: "large", amount: 500 },
    { label: "Valgfritt beløp", value: "custom" },
  ];

  useEffect(() => {
    if (donationSize === "custom") {
      setDonationValue(null);
    } else {
      const amount = donationsOptions.find((o) => o.value === donationSize)
        .amount;
      setDonationValue(amount);
    }
  }, [donationSize]);

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
        method: donationFrequency,
      }),
    })
      .then((res) =>
        res.json().then((data) => {
          if (data.url) {
            window.location = data.url;
          }
          setLoading(false);
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
        <Html>{body}</Html>
        <Illustration style={{ maxWidth: "200px" }} />
      </div>
      <div>
        <ButtonGroup
          value={donationSize}
          onChange={setDonationSize}
          options={donationsOptions}
        />

        {donationSize === "custom" && (
          <Input
            onChange={(e) => setDonationValue(Number(e.target.value))}
            type="tel"
            placeholder="Eller skriv inn et valgfritt beløp"
            postfix="kr"
            full
          />
        )}

        <Button full variant="primary" onClick={() => donate()}>
          {loading ? "Vennligst vent..." : "Gi med vipps"}
        </Button>
      </div>
    </div>
  );
}
