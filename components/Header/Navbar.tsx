'use client';

import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="container m-auto flex items-center justify-between border-b border-gray-500 bg-chinese-black pb-9 pt-8">
      <button className="md:hidden">
        <CldImage
          priority
          src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954957/audiophile/assets/shared/tablet/icon-hamburger_gq3gwz.svg"
          alt="Open menu"
          width="16"
          height="15"
        />
      </button>
      <Link href="/">
        <CldImage
          priority
          src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954930/audiophile/assets/shared/desktop/logo_s7mfms.svg"
          alt="audiophile home"
          width="143"
          height="25"
        />
      </Link>
      {children}
      <button>
        <CldImage
          src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954928/audiophile/assets/shared/desktop/icon-cart_vntcjo.svg"
          alt=""
          width="23"
          height="20"
          className="block h-[1.25rem] w-[1.4375rem]"
          aria-hidden="true"
        />
        <span className="sr-only">Preview shopping cart</span>
      </button>
    </div>
  );
};

export default Navbar;
