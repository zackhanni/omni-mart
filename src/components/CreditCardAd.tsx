import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <section className="container bg-white">
      <div className="row">
        <div className=" flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 text-center py-5 rounded-md shadow-xl outline outline-black/5 outline-1">
          <FontAwesomeIcon icon={faCreditCard} className="text-2xl sm:pr-4" />
          <div>
            <span>Earn 5% cash back.</span> See if you&apos;re pre-approved with
            no credit risk.
          </div>
          <Link href="/" className="underline text-sm sm:ml-4">
            Learn how
          </Link>
        </div>
      </div>
    </section>
  );
}
