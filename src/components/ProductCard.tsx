"use client";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface ProductCardProps {
  price: string;
  name: string;
  image: string;
}

export default function ProductCard(props: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (props.name.length > 45) {
    props.name = props.name.slice(0, 45 - props.name.length) + "...";
  }

  return (
    <div className="min-w-48 w-64 h-96 relative overflow-y-hidden ">
      <div className="top-2 right-2 absolute text-xl">
        <FontAwesomeIcon
          icon={isFavorite ? faSolidHeart : faHeart}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>

      <div className="w-full h-[50%]">
        <Image
          src={props.image}
          width={300}
          height={500}
          alt="Picture of the product"
          className="w-full object-cover h-full"
        />
      </div>

      <div className="py-4">
        <p className="font-bold">{props.price}</p>
        <p className="py-2">{props.name}</p>
        <button className="outline hover:outline-2 rounded-full py-1 px-4 ml-1">
          + Add
        </button>
      </div>
    </div>
  );
}
