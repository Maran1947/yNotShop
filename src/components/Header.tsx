import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQuery = (e: FormEvent<HTMLInputElement>): void => {
    setSearchQuery(e.currentTarget.value)
  }

  const handleNavigateTo = (path: string) => {
    router.push(path);
  };
  return (
    <div className="bg-white">
      <div className="border py-3 px-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-600"></span>
            <span onClick={() => handleNavigateTo('/')} className="ml-2 font-semibold text-[#252C32] hover:cursor-pointer">yNot Shop</span>
          </div>

          <div className="ml-6 flex flex-1 gap-x-3">
            <form className="w-[450px]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                value={searchQuery}
                onChange={handleSearchQuery}
                  type="search"
                  id="default-search"
                  className="block w-full p-3 ps-10 text-sm border-gray-300 rounded-lg bg-gray-50 focus:border-none focus:outline-none"
                  placeholder="Search laptops, monitors...."
                  required
                />
              </div>
            </form>
          </div>

          <div className="ml-2 flex">
            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                <path
                  fillRule="evenodd"
                  d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Orders</span>
            </div>

            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Favorites</span>
            </div>

            <div onClick={() => handleNavigateTo('/cart')} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100 hover:cursor-pointer">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                  3
                </span>
              </div>
              <span className="text-sm font-medium">Cart</span>
            </div>

            <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
              <span className="text-sm font-medium">Sign in</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-x-2 py-1 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">India</span>
          </div>

          <div className="flex gap-x-8">
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Best seller
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              New Releases
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Books
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Computers
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Fashion
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Health
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Pharmacy
            </span>
            <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
              Toys & Games
            </span>
          </div>

          <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
            Becoma a seller
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
