import Button from '../../../components/ui/Button/Button.tsx';

const ProductCalloutMedium = () => {
  return (
    <section
      className="mx-auto flex h-80 w-full max-w-[1280px] flex-col justify-center rounded-lg bg-callout-gray bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-speaker-zx7_llchgw.jpg')] bg-cover bg-right bg-no-repeat px-6 py-14 sm:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954220/audiophile/assets/home/tablet/image-speaker-zx7_wfnea8.jpg')] md:px-24 lg:bg-[url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954178/audiophile/assets/home/desktop/image-speaker-zx7_jhwqqe.jpg')]"
      // style={{
      //   backgroundImage:
      //     "url('https://res.cloudinary.com/dwboe2hgs/image/upload/v1684954199/audiophile/assets/home/mobile/image-speaker-zx7_llchgw.jpg')",
      // }}
    >
      <div className="flex flex-col items-start justify-between space-y-4">
        <h4 className="text-2xl font-semibold uppercase leading-[3.625rem] tracking-wider text-black">
          ZX7 Speaker
        </h4>
        <Button
          title="See ZX7 Speaker details"
          href="/products/zx7-speaker"
          intent={'secondary'}
        >
          See Product
        </Button>
      </div>
    </section>
  );
};

export default ProductCalloutMedium;
