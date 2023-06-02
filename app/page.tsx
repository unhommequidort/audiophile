import React from 'react';
import Hero from './components/Hero/Hero';

import Cards from './components/Cards/Cards';
import ProductCalloutLarge from './components/ProductCalloutLarge/ProductCalloutLarge';

const Home = () => {
  return (
    <main className="pb-10">
      <section className="w-full bg-hero-black bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-header_oaurvt.jpg')] bg-contain bg-center bg-no-repeat px-6 min-[458px]:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954221/audiophile/assets/home/tablet/image-header_oyaf8r.jpg')] xl:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/image-hero_dmsw75.jpg')] xl:bg-right min-[1800px]:bg-center">
        {/* @ts-expect-error Server Component */}
        <Hero />
      </section>
      {/* @ts-expect-error Server Component */}
      <Cards />
      <div className="mt-40 w-full px-6">
        <ProductCalloutLarge />
      </div>
    </main>
  );
};

export default Home;
