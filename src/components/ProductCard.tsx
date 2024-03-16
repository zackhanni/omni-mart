import Image from "next/image";

interface ProductCardProps {
  price: string;
  name: string;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className="bg-yellow-800 min-w-64 h-72">
      {/* <Image
        src="/profile.png"
        width={300}
        height={500}
        alt="Picture of the product"
      /> */}

      <div>
        <p>{props.price}</p>
        <p>{props.name}</p>
        <button className="bg-blue-300 rounded-full py-1 px-4">+ Add</button>
      </div>
    </div>
  );
}
