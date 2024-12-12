"use client";
import Image from "next/image";
import { useState } from "react";
import { Product } from "../../pages";

export default function Showcase({ productData }: { productData: Product[] }) {
  const [visibleToolTip, setVisibleToolTip] = useState<null | {
    index: number;
  }>(null);

  const showToolTip = (index: number) => {
    const tooltip =
      visibleToolTip && visibleToolTip.index === index ? null : { index };
    setVisibleToolTip(tooltip);
  };
  return (
    <div className="bg-[#f5e7d8] md:h-auto h-screen font-serif">
      <div className="py-10">
        <div className="flex md:justify-center justify-between">
          <div className="flex md:flex-col md:items-center md:basis-2/4  h-fit w-fit">
            <div className="flex absolute md:ml-0 ml-4 md:relative  bottom-[40%] md:bottom-0  z-50 md:w-2/3 w-1/2 ">
              <Image
                alt="A woman wearing a patterned shirt sitting on a white chair with a pink background"
                src="/assets/Picture2.jpg"
                className="w-full"
                width="1080"
                height="1350"
              />
              <div
                onClick={() => showToolTip(0)}
                className={`${
                  visibleToolTip && visibleToolTip?.index === 0
                    ? "bg-[#bfa76f] border-white text-white"
                    : ""
                } cursor-pointer absolute top-0 right-0 m-5 p-2 border border-black rounded-full transition-opacity flex items-center justify-center w-8 h-8`}
              >
                <i className="fas fa-check"></i>
                {visibleToolTip && visibleToolTip?.index === 0 ? (
                  <div className="absolute w-52 top-full md:top-0 md:right-full mr-2 bg-[#bfa76f] text-white text-xs rounded py-1 px-2 mt-2 md:mt-0">
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#bfa76f]"></div>

                    <strong>{productData[0]?.name}</strong>
                    <p className="text-xl">{productData[0]?.price} €</p>
                    <div className="md:hidden block absolute left-1/2 transform -translate-x-1/2 top-[-8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#bfa76f]"></div>
                  </div>
                ) : null}
              </div>
              <div className="absolute bottom-0 right-0 m-5 p-2 border border-black rounded-full transition-opacity flex items-center justify-center w-8 h-8">
                <i className="fas fa-plus"></i>
              </div>
            </div>
            <div className="flex flex-wrap md:mt-6 space-y-5 md:px-2 p-2 md:relative absolute bottom-[10%] md:w-2/3 w-full mb-3">
              <div>
                <h1 className="text-2xl text-gray-800 font-normal">
                  Get ready for a party
                </h1>
              </div>
              <p className="md:hidden block mt-4 text-gray-700 ">
                If you're looking for extraordinary gifts, you've come to the
                right place. Timeless clothes for any style. Iconic bags
                designed to last. And home decor that lights up rooms and faces.
                Explore our favorite gifts, from special little somethings to
                special occassion treats.
              </p>
              <p className="md:block hidden mt-4 text-gray-700">
                Get ready to express yourself! Begin with a bold dress featuring
                vibrant patterns or create a playful look by mixing prints.
                Timeless floral, stripes, and wavy patterns ensure wear beyond
                the party season. Enhance your outfit with accessories like a
                statement hairpiece, bold scarf, or bright bag. Opt for a pop of
                color with an enchanting black dress. The key is to have fun and
                feel confident.
              </p>
            </div>
          </div>
          <div className="md:block flex justify-end h-fit md:basis-2/4 basis-2/3 ">
            <div className="relative">
              <Image
                alt="A woman holding a black bag with small pastel-colored pouches attached, wearing a patterned top"
                src="/assets/Picture1.jpg"
                width="1000"
                layout="responsive"
                height="1400"
              />
              <div
                onClick={() => showToolTip(1)}
                className={`${
                  visibleToolTip && visibleToolTip?.index === 1
                    ? "bg-[#bfa76f] border-white text-white"
                    : ""
                } cursor-pointer absolute top-0 right-0 m-5 p-2 border border-black rounded-full transition-opacity flex items-center justify-center  w-8 h-8`}
              >
                <i className="fas fa-check"></i>
                {visibleToolTip && visibleToolTip?.index === 1 ? (
                  <div className="absolute w-52 right-full mr-2 bg-[#bfa76f] text-white text-xs rounded py-1 px-2">
                    <div className="absolute top-1/2 transform -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#bfa76f]"></div>

                    <strong>{productData[1]?.name}</strong>
                    <p className="text-xl">{productData[1]?.price} €</p>
                  </div>
                ) : null}
              </div>
              <div className="absolute bottom-0 right-0 m-5 p-2 border border-black rounded-full transition-opacity flex items-center justify-center  w-8 h-8">
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
    </div>
  );
}
