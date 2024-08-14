import React from "react";

function NotFound() {
  return (
    <section className="bg-white h-[300px] md:py-16 flex w-full">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-2">
          Your cart is empty!
        </h2>
        <p className="text-gray-500 mb-6 md:mb-8">
          {'Looks like you haven\'t made your choice yet...'}
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-500 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            Return to shopping
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
