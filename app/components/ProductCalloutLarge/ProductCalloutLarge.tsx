import Image from 'next/image';
import Button from '../../../components/ui/Button/Button';
import React from 'react';

const ProductCalloutLarge = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-around space-y-8 rounded-lg bg-peru bg-bottom bg-no-repeat px-6 py-14"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/pattern-circles_oscr05.svg')",
      }}
    >
      <Image
        width={320}
        height={388}
        src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-speaker-zx9_sfyz0q.png"
        alt="ZX9 Speaker"
        className="w-44"
      />

      <div className="flex flex-col items-center justify-between space-y-4 text-center">
        <h4 className="text-3xl font-semibold uppercase leading-10 tracking-wider text-white sm:text-5xl sm:leading-[3.625rem]">
          ZX9 Speaker
        </h4>
        <p className="text-base text-white">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
      </div>
      <Button
        title="See ZX9 Speaker details"
        href="/products/zx9-speaker"
        className="!bg-black !text-white transition-all hover:opacity-80"
        intent={'primary'}
      >
        See Product
      </Button>
    </section>
  );
};

export default ProductCalloutLarge;
