import React from "react";

const Product = () => {
  return (
    // <div className="bg-gray-100 sm:bg-yellow-300  md:bg-green-300  lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-200">
    <div className="bg-gray-100 ">
      <div className="lg:grid  lg:grid-cols-2   2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md sm:max-w-xl  lg:px-12 lg:py-24  lg:max-w-full xl:justify-self-end  2xl:col-span-2">
          <div className="xl:max-w-xl  ">
            <img className="h-10" src="/favicon.ico"></img>
            <img
              className="mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center rounded-lg shadow-xl lg:hidden"
              src="/img/man.jpg"
            ></img>
            <h1 className="mt-6 sm:mt-8 font-headline  text-2xl  lg:text-3xl  xl:text-4xl font-bold text-gray-900">
              You can work from anywhere.
              <br className="hidden sm:inline" />
              <span className="text-brand">Take advantage of it.</span>
            </h1>
            <p className="mt-6 font-headline  sm:mt-8 sm:text-xl text-gray-600">
              Wordaction helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-5 ">
              <a className="btn font-headline">Book your escape</a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            className="absolute  inset-0 w-full h-full object-cover object-center"
            src="/img/man.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Product;
