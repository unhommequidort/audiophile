import Button from '../../../components/ui/Button/Button';
import React from 'react';

const ProductCalloutSmall = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] flex-col space-y-6  sm:flex-row sm:space-x-2 sm:space-y-0 md:space-x-6">
      <figure className="h-52 rounded-lg bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-earphones-yx1_bein9s.jpg')] bg-cover bg-center sm:h-80 sm:w-[50%] sm:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954220/audiophile/assets/home/tablet/image-earphones-yx1_aah9s3.jpg')] md:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/image-earphones-yx1_ixcouc.jpg')]">
        <img
          src="https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-earphones-yx1_bein9s.jpg"
          className="sr-only"
          alt="YX1 Earphones"
        />
      </figure>
      <div className="flex h-52 items-center justify-start rounded-lg bg-anti-flash-white px-6 sm:h-80 sm:w-[50%] sm:px-10 md:px-14 lg:px-20">
        <div className="flex flex-col items-start justify-between space-y-4 sm:space-y-8">
          <h4 className="text-2xl font-semibold uppercase  tracking-wider text-black sm:leading-7">
            YX1 Earphones
          </h4>
          <Button
            title="See YX1 earphones details"
            href="/products/yx1-earphones"
            intent={'secondary'}
          >
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCalloutSmall;
