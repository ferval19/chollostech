import Image from "next/image";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    console.log("Hago click");
    setActive(!active);
  };

  const menu = [
    {
      item: "Destacado",
      url: "/",
    },
    {
      item: "LifeStyle",
      url: "/lifestyle",
    },
    {
      item: "Videojuegos",
      url: "/videojuegos",
    },
    {
      item: "Domótica",
      url: "/domotica",
    },
  ];
  return (
    <div>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">ChollosTech</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="ChollosTech logo"
                    width="50"
                    height="50"
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={handleClick}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Abrir menú</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {menu.map((menu) => (
              <Link href={menu.url} key={menu.item}>
                <a className="font-medium text-gray-500 hover:text-gray-900">
                  {menu.item}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div
        className={`${
          active ? "" : "hidden"
        }   absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <Link href="/">
              <a>
                <Image
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="ChollosTech logo"
                  width="50"
                  height="50"
                />
              </a>
            </Link>
            <div className="-mr-2">
              <button
                onClick={handleClick}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`${active ? "" : "hidden"}   px-2 pt-2 pb-3 space-y-1`}
          >
            {menu.map((menu) => (
              <Link href={menu.url} key={menu.item}>
                <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {menu.item}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
