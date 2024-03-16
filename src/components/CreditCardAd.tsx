import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <div className="bg-purple-800 flex justify-center items-center p-4 rounded-md">
      <p>
        <span>Earn 5% cash back.</span> See if you&apos;re pre-approved with no
        credit risk.
      </p>
      <Link
        href="/"
        className="underline bg-orange-300 rounded-md shadow-2xl p-2"
      >
        Learn how
      </Link>
    </div>
  );
}
