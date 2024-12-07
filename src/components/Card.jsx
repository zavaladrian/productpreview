import React from "react";
import CartIcon from "./CartIcon";

const Card = () => {
  return (
    <div className="flex flex-col basis-[560px] desktop:flex-row bg-white rounded-lg overflow-hidden">
      <img
        src="/image-product-mobile.jpg"
        className="desktop:hidden rounded-t-lg w-full h-full object-cover"
        alt="mobile-photo"
      />
      <img
        src="/image-product-desktop.jpg"
        className="desktop:block mobile:hidden rounded-l-lg h-full w-1/2"
        alt="desktop-photo"
      />
      <div className="p-6">
        <p className="font-sans py-4 text-sm tracking-widest font-base ">
          P E R F U M E
        </p>

        <p className="text-verydarkblue font-serif font-bold text-3xl pb-4">
          Gabrielle Essence Eau De Parfum
        </p>

        <p className="mb-4 text-sm font-medium text-darkgrayishblue leading-6">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-darkcyan text-3xl font-serif font-bold">$149.99</span>
          <span className=" line-through font-medium text-xs text-darkgrayishblue">$169.99</span>
        </div>
        <button className="bg-darkcyan text-white font-medium text-sm flex items-center justify-center  gap-2 py-3 rounded-lg w-full hover:bg-darkcyan/80">
          <CartIcon  />
         Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
