import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <div className="flex justify-center items-center py-5 rounded-md my-4 shadow-xl space-x-4 outline outline-gray-100 outline-1">
      <p>
        <FontAwesomeIcon icon={faCreditCard} className="text-2xl pr-4" />
        <span>Earn 5% cash back.</span> See if you&apos;re pre-approved with no
        credit risk.
      </p>
      <Link href="/" className="underline text-sm">
        Learn how
      </Link>
    </div>
  );
}
