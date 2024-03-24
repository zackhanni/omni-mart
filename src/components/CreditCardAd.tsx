import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <section className="container">
      <div className="row">
        <div className="text-center py-5 rounded-md shadow-xl outline outline-black/5 outline-1">
          <FontAwesomeIcon icon={faCreditCard} className="text-2xl pr-4" />
          <span>Earn 5% cash back.</span> See if you&apos;re pre-approved with
          no credit risk.
          <Link href="/" className="underline text-sm ml-4">
            Learn how
          </Link>
        </div>
      </div>
    </section>
  );
}
