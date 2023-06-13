import Image from 'next/image';
import Button from '../../../components/ui/Button/Button';
import React from 'react';

const ProductCalloutLarge = () => {
  return (
    <section
      className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-around space-y-8 overflow-hidden rounded-lg bg-peru bg-cover bg-[center_-120px] bg-no-repeat px-6 py-14 sm:bg-contain sm:bg-[center_-100px] lg:h-[580px] lg:flex-row lg:bg-[left_bottom] "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/pattern-circles_oscr05.svg')",
      }}
    >
      <div className="lg:relative lg:flex-1">
        <picture>
          <source
            srcSet="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/image-speaker-zx9_kaz4uj.png"
            media="(min-width: 768px)"
          />
          <source
            srcSet="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954220/audiophile/assets/home/tablet/image-speaker-zx9_vesf3h.png"
            media="(min-width: 640px)"
          />
          <Image
            width={320}
            height={388}
            src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-speaker-zx9_sfyz0q.png"
            alt="ZX9 Speaker"
            className="block w-44 lg:absolute lg:-bottom-80 lg:w-[410px] lg:self-end xl:left-16"
          />
        </picture>
      </div>

      <div className="flex flex-col items-center justify-between space-y-8 text-center lg:mx-16 lg:flex-1 lg:items-start lg:text-left">
        <div>
          <h4 className="space-y-4 text-3xl font-semibold uppercase leading-10 tracking-wider text-white sm:text-5xl sm:leading-[3.625rem]">
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
      </div>
    </section>
  );
};

export default ProductCalloutLarge;
