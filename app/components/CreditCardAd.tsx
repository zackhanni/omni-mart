import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function CreditCardAd() {
  return (
    <section className="container bg-white">
      <div className="row">
        <div className=" flex justify-center items-center flex-col md:flex-row space-y-4 sm:space-y-0 text-center py-5 rounded-md shadow-xl outline outline-black/5 outline-1">
          <FontAwesomeIcon
            icon={faCreditCard}
            className="w-5 h-auto hidden md:block"
          />
          <div className="sm:ml-4 sm:mr-3">
            Earn 5% cash back. See if you&apos;re pre-approved with no credit
            risk.
          </div>
          <Link href="/" className="underline text-sm">
            Learn how
          </Link>
        </div>
      </div>
    </section>
  );
}
