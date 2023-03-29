import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  name: string;
  price: number;
  imageUrl1: string;
  imageUrl2: string;
  view: number;
};

const Products = ({ name, price, imageUrl1, imageUrl2, view }: Props) => {
  const [imageUrl, setImageUrl] = useState(imageUrl1);
  return (
    <Link href={""}>
      <div
        className={`aspect-[75/100] group ${
          view === 4 ? "w-[18vw]" : "w-[32vw]"
        }`}
        onMouseEnter={() => setImageUrl(imageUrl2)}
        onMouseLeave={() => setImageUrl(imageUrl1)}
      >
        <Image
          width={200}
          height={100}
          alt={name}
          src={imageUrl}
          className="w-full h-full object-cover "
        />
        <div className="px-2 py-1 space-y-1">
          <p className="text-base group-hover:text-primary transition-colors duration-150">
            {name}
          </p>
          <p className=" font-semibold text-lg">{price} $</p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
