import React from "react"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"

async function Hero() {
  const res = await client.fetch(
    "*[_type=='landingPage'][0].sections[0]{'heroImg':heroImg.asset->url,'heroHeading':heroHeading}",
  )
  const { heroImg, heroHeading } = await res

  return (
    <div className="relative w-full min-h-screen bg-[#FBEBB5] flex flex-col lg:flex-row">
      {/* Left side - Hero Text & Link */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-12 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6 sm:mb-8">
          {heroHeading}
        </h1>
        <Link
          href="/shop"
          className="inline-block text-lg sm:text-xl font-semibold text-gray-800 hover:text-gray-600 transition-colors duration-300 mb-4 sm:mb-6"
        >
          Shop Now
        </Link>
        <div className="w-16 sm:w-24 h-1 bg-black" />
      </div>

      {/* Right side - Hero Image */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-auto relative">
        <Image
          src={heroImg || "/placeholder.svg"}
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="rounded-none lg:rounded-l-lg hover:scale-105 transition duration-300"
          priority
        />
      </div>
    </div>
  )
}

export default Hero

