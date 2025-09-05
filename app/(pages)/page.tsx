import Image from "next/image";
import { Outfit } from "next/font/google";
import "./page.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stripe, stripeCarousel } from "@/lib/stripe";

import { ProductCard } from "@/components/ProductCard/ProductCard";
import { Carousel } from "@/components/Carousel";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });
  const productsCarousel = await stripeCarousel.products.list({
    expand: ["data.default_price"],
  });

  const marqueeCourse = [
    "Zara",
    "Tommy Hilfiger",
    "Lenovo",
    "Gucci",
    "Under Armour",
    "L'Oréals",
    "Dell",
    "Huawei ",
    "Puma",
    "Gucci",
    "Under Armour",
    "Levi’s",
    "Philips",
  ];
  return (
    <div className={`${OutfitFont.className}`}>
      {/* Hero Section */}
      <section className="hero-section props-wrapper py-3">
        <div className="container items-center h-full relative">
          <div className="lg:flex mx-auto  border-dotted border-slate-300 border-3 rounded-lg pl-7 pr-3 py-5">
            <div className="her-img flex-1 lg:w-[70%]">
              {/* <img className="w-full" src={heroImg} alt="Hero Image" /> */}
              {/* <Image
                src={"/hero-img.png"}
                alt="Hero Image"
                className="w-full"
                width="500"
                height="300"
                priority // Optional: if it's above-the-fold content
              /> */}
              <Carousel products={productsCarousel.data} />
            </div>
            <div className="flex flex-col lg:w-[30%] pl-8 mt-5 lg:mt-0 justify-center">
              <div className="uppercase pb-6 font-bold">
                <span>Get upto</span>
                <span className="block text-5xl">
                  <span className="text-primary">60%</span> off
                </span>
              </div>
              <h1 className="text- title font-nohemi capitalize flex align-center pb-3">
                Just
                <span className="font-black slider ml-3">
                  <span className="slide1 text-orange-400">Click Away</span>
                  <span className="slide2 text-orange-400">Shop Smart</span>
                  <span className="slide3 text-orange-400">Live Better</span>
                </span>
              </h1>
              <p className="text-slate-400">
                Discover a better way to shop — stylish, simple, and delivered
                to your door
              </p>
              <Link
                href="/products"
                className="bg-primary text-white rounded-4xl py-2 w-35 item-center mt-3 hover:bg-transparent hover:border hover:border-primary hover:text-primary flex justify-center transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="props ">
            <Image
              src={"/ballons.png"}
              alt="Balloons"
              width={37}
              height={100}
            />
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <section>
        <div className="list-marquee text-center flex items-center container">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="list-none list text-gray-400 font-bold">
              {marqueeCourse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* View Products */}
      <section className="mt-10">
        <div className="container">
          <div className="flex justify-between">
            <h3>Flash Sale</h3>
            <Link href="/products" className="flex items-center">
              <ArrowRight size={18} className="mr-1 hover:mr-3" />
              View All
            </Link>
          </div>
          <div className="cards flex flex-wrap justify-between mt-5 gap-5">
            {products.data.map((item, i) => {
              console.log("map item", item.images[0]);
              return (
                <div
                  className="lg:w-[18%] md:w-[25%] w-full gap-3 border rounded-sm p-5"
                  key={i}
                >
                  <ProductCard product={item} cardHeight="h-50" />

                  {/* <span>{item?.default_price}</span> */}
                  {/* <p>{item.name}</p> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* carouel */}
      <section>
        <div className="container">
          {/* <Carousel products={productsCarousel.data} /> */}
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mid-block text-center mx-auto mt-10">
            <h2 className="text-2 title">
              Your Wishlist
              <span className="text-primary font-bold ml-2">
                Delivered Fast
              </span>
            </h2>
            <p>Why Pay More? Shop Online for Less</p>
          </div>
        </div>
        <div className="video-cards">
          {/* <Carousel>
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full" key={i}>
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </Carousel> */}
          {/* <div className="owl-carousel owl-theme" id="owl-carousel">
            {videoCard.map((video, i) => (
              <div className="video-wrapper h-full">
                <div className="video-item item h-full">
                  <img src={video.img} alt="Video Image" />
                  <video muted loop preload="auto">
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <span className="video-shadow"></span>
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}
