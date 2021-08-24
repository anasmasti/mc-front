import Link from "next/link";
import MobileMenu from "./MobileMenu";
import SubMenu from "./SubMenu";
import headerStyle from "../../../styles/shared/Header.module.scss";

let categories = [
  {
    id: 1,
    title: "Homme",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    id: 2,
    title: "Femme",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    id: 3,
    title: "Enfant",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
];

let callsToAction = [
  {
    id: 1,
    action: "Voir tout",
    href: "#",
  },
  {
    id: 2,
    action: "Contactez nous",
    href: "#",
  },
];

let mobileMenu = [
  {
    id: 1,
    title: "Accueil",
    href: "#",
  },
  {
    id: 2,
    title: "A propos",
    href: "#",
  },
  {
    id: 3,
    title: "Contact",
    href: "#",
  },
];

const NavBar = () => {
  return (
    <header>
      <div className={[headerStyle.header_box, "relative bg-white"].join(" ")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="#">
                <a>
                  <span className="sr-only">M&C</span>
                  <h1>
                    <strong>M&C</strong>
                  </h1>
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>

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
            <nav className="hidden md:flex space-x-10">
              <Link href="/">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Accueil
                </a>
              </Link>

              <SubMenu categories={categories} callsToAction={callsToAction} />

              <Link href="#">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Produits
                </a>
              </Link>
              <Link href="#">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="/login">
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  S'identifier
                </a>
              </Link>
              <Link href="/signup">
                <a className="main-btn ml-3">S'inscrire</a>
              </Link>
            </div>
          </div>
        </div>
        <MobileMenu mobileMenu={mobileMenu} categories={categories} />
      </div>
    </header>
  );
};

export default NavBar;
