import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function Pick() {
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
  interface ProductCard {
    cardHeading: string;
    cardImg: string;
    cardPrice: number;
  }

  const res = await client.fetch(
    "*[_type=='productPage'][0].sections[0].card[]{'cardHeading':cardHeading,'cardImg':cardImg.asset->url,'cardPrice':cardPrice,}"
  );
  const { cardHeading, cardImg, cardPrice } = await res;

  return (
    <>
      <div className='w-full'>
        <div className='text-[36px] font-bold text-center mt-[150px] pt-[55px]'>Top Picks For You</div>

        <div className='text-[#737272] text-[16px] font-semibold text-center pt-[13px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>

        {/* picks card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[45px] mt-20">
  {response.slice(13, 21).map((item: Product, index: number) => {
    // Define custom grid layout for different image sizes
    let gridStyles = '';
    
    // Tall images (spanning 2 rows, 1 column)
    if (index % 3 === 0) {
      gridStyles = "col-span-1 row-span-2"; // Tall images
    } 
    // Wide images (spanning 2 columns, 1 row)
    else if (index % 2 === 0) {
      gridStyles = "col-span-2 row-span-1"; // Wide images
    } 
    // Regular-sized images (1 column, 1 row)
    else {
      gridStyles = "col-span-1 row-span-2"; // Regular-sized images
    }

    return (
      <div
        key={index}
        className={`relative ${gridStyles} group rounded-lg shadow-lg overflow-hidden transition-all ease-in-out`}
      >
        {/* Image Section */}
        <div className="w-full h-[300px] relative">
          <Link
            href={`/shop/proId?name=${item.name}&image=${item.imagePath}&price=${item.price}&category=${item.category}&description=${item.description}`}
          >
            <Image
              src={item.imagePath}
              alt={item.name}
              objectFit="cover"
              layout="fill"
              className="hover:scale-105 transition duration-300"
            />
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white py-4 text-center">
          <div className="text-[18px] font-bold text-gray-800">
            {item.name}
          </div>
          <div className="text-[14px] text-gray-600 mt-1">
            {item.description}
          </div>
          <div className="text-[20px] font-semibold text-gray-800 mt-2">
            Rs. {item.price}.00
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <Link
            href={`/shop/proId?name=${item.name}&image=${item.imagePath}&price=${item.price}&category=${item.category}&description=${item.description}`}
          >
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Add to Cart
          </button>
          </Link>
        </div>
      </div>
    );
  })}
</div>




        <div className='h-[50px] w-[120px] flex flex-col gap-[3px] mt-[70px] mx-auto mb-[51px]'>
          <div className='text-[22px] font-bold cursor-pointer'> <Link href={'/shop'} className='hover:text-gray-600'>View More</Link></div>
          <div className='border-b-[2px] border-black w-[110px] h-[10px] '></div>
        </div>
      </div>
    </>
  )
}

export default Pick
