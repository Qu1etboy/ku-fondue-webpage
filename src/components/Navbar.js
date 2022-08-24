import { useState, useEffect } from "react";
import { MobileNav, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <>
      <Link to="/">
        <div className="cursor-pointer hover:text-green-500">Home</div>
      </Link>
      <Link to="/about">
        <div className="cursor-pointer hover:text-green-500">About</div>
      </Link>
      <Link to="/download">
        <div className="cursor-pointer hover:text-green-500">Download</div>
      </Link>
    </>
  );
  return (
    <div className="w-full shadow-lg">
      <div className="text-black p-5 container mx-auto max-w-[1024px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-extrabold text-3xl text-green-500">KU</span>
            <span className="text-xl ml-2">Complaint</span>
          </div>
          <div className="hidden lg:flex gap-5">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="p-5 flex flex-col gap-3">{navList}</div>
        </MobileNav>
      </div>
    </div>
  );
};

export default Navbar;
