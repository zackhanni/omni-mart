import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <div className="flex justify-center items-center p-4 rounded-md mx-4 my-2 shadow-xl outline outline-gray-100 space-x-4">
      <p>
        <span>Earn 5% cash back.</span> See if you&apos;re pre-approved with no
        credit risk.
      </p>
      <Link href="/" className="underline bg-orange-300 rounded-md p-2">
        Learn how
      </Link>
    </div>
  );
}
