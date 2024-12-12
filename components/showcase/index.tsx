"use client";
import { useState } from "react";
import { Product } from "../../pages/api/data";

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
    <div className="bg-[#f5e7d8] md:h-auto h-screen relative flex min-h-full flex-col py-20 md:min-h-screen md:flex-row md:p-0">
      <div className="basis-1/2 p-5 md:p-0 md:pt-5 z-20">
        <div className="relative flex flex-col justify-center md:items-center">
          <div className="relative mb-10 w-2/4 md:w-[65%]">
            <img
              src="/assets/Picture2.jpg"
              alt="A woman wearing a patterned shirt sitting on besides white chair with a pink background"
            />
            <button
              onClick={() => showToolTip(0)}
              className=" cursor-pointer absolute left-[60%] top-[40%] flex h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <i className="fas fa-info"></i>
              {visibleToolTip && visibleToolTip?.index === 0 ? (
                <div className="absolute w-52 top-full mr-2 bg-[#bfa76f] text-white text-xs rounded py-1 px-2 mt-2">
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-[-8px] w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-[#bfa76f]"></div>

                  <strong>{productData[0]?.name}</strong>
                  <p className="text-xl">{productData[0]?.price} €</p>
                </div>
              ) : null}
            </button>
          </div>
          <div className="md:w-[65%]">
            <h2 className="mb-5 text-2xl text-gray-800">
              Get ready for a party
            </h2>
            <div className="md:hidden block">
              If you're looking for extraordinary gifts, you've come to the
              right place. Timeless clothes for any style. Iconic bags designed
              to last. And home decor that lights up rooms and faces. Explore
              our favorite gifts, from special little somethings to special
              occassion treats.
            </div>
            <div className="hidden md:block">
              Get ready to express yourself! Begin with a bold dress featuring
              vibrant patterns or create a playful look by mixing prints.
              Timeless floral, stripes, and wavy patterns ensure wear beyond the
              party season. Enhance your outfit with accessories like a
              statement hairpiece, bold scarf, or bright bag. Opt for a pop of
              color with an enchanting black dress. The key is to have fun and
              feel confident.
            </div>
          </div>
        </div>
      </div>
      <div className="order-[-1] basis-1/2 md:order-1 z-10">
        <div className="relative mb-[-40%] ml-[35%] w-[65%] md:mb-0 md:ml-0 md:w-full">
          <img
            src="/assets/Picture1.jpg"
            alt="A woman holding a black bag with small pastel-colored pouches attached, wearing a patterned top"
          />
          <button
            onClick={() => showToolTip(1)}
            className=" cursor-pointer absolute left-[60%] top-[40%] flex h-10 w-10 items-center justify-center rounded-full bg-white"
          >
            <i className="fas fa-info"></i>
            {visibleToolTip && visibleToolTip?.index === 1 ? (
              <div className="absolute w-52 right-full mr-2 bg-[#bfa76f] text-white text-xs rounded py-1 px-2 mt-2 md:mt-0">
                <div className=" absolute top-1/2 transform -translate-y-1/2 -right-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#bfa76f]"></div>

                <strong>{productData[0]?.name}</strong>
                <p className="text-xl">{productData[0]?.price} €</p>
              </div>
            ) : null}
          </button>
        </div>
      </div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
    </div>
  );
}
