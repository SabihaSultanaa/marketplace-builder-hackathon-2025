import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";

async function ShopProducts() {
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
  }

  const response = await client.fetch(`*[_type=='product']{
  _id,
  imagePath,
    description,
    price,
    name,
    category,
    discountPercentage,
    isFeaturedProduct,
    stockLevel
}`);

  return (
    <>
      <div className="w-full px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
  {response.map((item: Product, index: number) => (
    <div 
      key={index} 
      className="relative group w-full h-auto mt-4 rounded-lg shadow-lg overflow-hidden"
    >
      {/* Card Content */}
      <div className="w-full relative">
        {/* Image Section */}
        <div className="w-full h-[250px] relative">
          <Image
            src={item.imagePath}
            alt={item.name}
            objectFit="cover"
            layout="fill"
            className="transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="text-center bg-white py-4">
          <div className="text-[18px] font-bold text-gray-800">
            {item.name}
          </div>
          <div className="text-[14px] text-gray-600 mt-2">
            {item.description}
          </div>
          <div className="text-[20px] font-semibold text-gray-800 mt-2">
            Rs. {item.price}.00
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        
        <Link href={`/shop/proId?name=${item.name}&image=${item.imagePath}&price=${item.price}&category=${item.category}&description=${item.description}`}
         className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
         
          Add to Cart
        </Link>
      </div>
    </div>
  ))}
</div>


        <div className="flex justify-center space-x-2 mt-[80px]">
          <Button
            variant="outline"
            className="w-12 h-12 rounded-lg bg-[#FBEBB5]"
          >
            1
          </Button>
          <Button variant="outline" className="w-12 h-12 rounded-lg">
            2
          </Button>
          <Button variant="outline" className="w-12 h-12 rounded-lg">
            3
          </Button>
          <Button variant="outline" className="px-4 h-12 rounded-lg">
            Next
          </Button>
        </div>

        {/* features */}
        <div className="bg-[#FAF4F4] py-16 mt-[100px]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-medium mb-4">Free Delivery</h3>
                <p className="text-gray-600">
                  For all oders over $50, consectetur adipim scing elit.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">90 Days Return</h3>
                <p className="text-gray-600">
                  If goods have problems, consectetur adipim scing elit.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4">Secure Payment</h3>
                <p className="text-gray-600">
                  100% secure payment, consectetur adipim scing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* end div */}
      </div>
    </>
  );
}

export default ShopProducts;
