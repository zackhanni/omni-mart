"use client";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatCurrency } from "@/lib/formatters";
import { Button } from "./ui/button";
import Link from "next/link";

interface ProductCardProps {
  price: string;
  name: string;
  image: string;
  description?: string;
}

export function ProductCardVertical(props: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (props.name.length > 45) {
    props.name = props.name.slice(0, 45 - props.name.length) + "...";
  }

  return (
    <div className="col relative">
      <div className="top-2 right-6 absolute text-xl">
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

      <div className="flex flex-col px-2 py-2">
        <p className="font-bold">{props.price}</p>
        <p className="">{props.name}</p>
        <button className="outline outline-1 hover:outline-2 rounded-full py-2 px-8 w-fit">
          + Add
        </button>
      </div>
    </div>
  );
}

//
//
//

export function ProductCardHorizontal(props: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (props.description && props.description.length > 60) {
    props.description =
      props.description.slice(0, 60 - props.description.length) + "...";
  }

  return (
    <div className="col-lg-6">
      <div className="row g-0">
        <div className="col bg-black/5 flex flex-col justify-center">
          <div className="px-8 ">
            <p className="font-semibold text-xl">{props.name}</p>
            <p className="hidden sm:block">{props.description}</p>
            <button className="outline outline-1 hover:outline-2 rounded-full py-2 px-6">
              See deals
            </button>
          </div>
        </div>
        <div className="col overflow-hidden sm:h-64">
          <Image
            src={props.image}
            width={300}
            height={500}
            alt="Picture of the product"
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
}

//
//
//

type NewProductCardProps = {
  id: string;
  name: string;
  priceInCents: number;
  description: string;
  imagePath: string;
};

export function ProductCard({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: NewProductCardProps) {
  return (
    <Card className="flex overflow-hidden flex-col">
      <div className="relative w-full h-auto aspect-video">
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="line-clamp-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" className="w-full">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
