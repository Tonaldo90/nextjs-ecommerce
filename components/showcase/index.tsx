"use client";
import Image from "next/image";
import { useState } from "react";

export default function Showcase({
  productData,
}: {
  productData: {
    name: string;
    price: number;
  }[];
}) {
  const [visibleToolTip, setVisibleToolTip] = useState(null);

  const showToolTip = (index: number) => {
    const tooltip =
      visibleToolTip && visibleToolTip.index === index ? null : { index };
    setVisibleToolTip(tooltip);
  };
  return (
    <div className="bg-[#f5e7d8] h-screen">
      <div className="py-10">
        <div className="flex md:justify-center justify-evenly gap-5">
          <div className="flex md:flex-col md:items-center md:p-2 md:basis-80  h-fit w-fit">
            <div className="flex absolute md:relative md:w-auto bottom-1/3 md:bottom-0  left-4 z-50 w-2/4 ">
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
                } cursor-pointer absolute top-0 right-0 m-5 p-2 border-2 border-black rounded-full transition-opacity flex items-center justify-center w-10 h-10`}
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
              <div className="absolute bottom-0 right-0 m-5 p-2 border-2 border-black rounded-full transition-opacity flex items-center justify-center w-10 h-10">
                <i className="fas fa-plus"></i>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 space-y-5 md:px-2 p-2 md:relative absolute bottom-0 w-full md:w-auto mb-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Get ready for a party
                </h1>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
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
          <div className="flex justify-end md:justify-center h-fit md:basis-2/4 ">
            <div className="relative   ">
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
                } cursor-pointer absolute top-0 right-0 m-5 p-2 border-2 border-black rounded-full transition-opacity flex items-center justify-center w-10 h-10`}
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
              <div className="absolute bottom-0 right-0 m-5 p-2 border-2 border-black rounded-full transition-opacity flex items-center justify-center w-10 h-10">
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
