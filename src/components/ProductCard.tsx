import Image from "next/image";

interface ProductCardProps {
  price: string;
  name: string;
  image: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="min-w-64 h-72 bg-blue-100">
      <div className="w-full h-[70%]">
        <Image
          src={props.image}
          width={300}
          height={500}
          alt="Picture of the product"
          className="w-full object-cover h-full"
        />
      </div>

      <div className="">
        <p>{props.price}</p>
        <p>{props.name}</p>
        <button className="outline hover:outline-2 rounded-full py-1 px-4">
          + Add
        </button>
      </div>
    </div>
  );
}
