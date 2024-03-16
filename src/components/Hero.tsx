import React from "react";

export default function Hero() {
  return (
    <section>
      <div className="h-screen w-full bg-blue-900 flex items-center">
        <div className="flex flex-col w-fit bg-blue-700 text-2xl">
          <h1>The new Sale is here!</h1>
          <p>buy today. limited time deal</p>
          <p>99.99 moneys</p>
          <button className="bg-blue-500 w-fit">Buy now</button>
        </div>
        <div></div>
      </div>
    </section>
  );
}
