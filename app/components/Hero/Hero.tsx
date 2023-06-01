import prisma from '@/lib/prisma';
import Nav from '../Header/Nav/Nav';
import Navbar from '../Header/Navbar';
import Button from '@/components/ui/Button/Button';

export const revalidate = 3600;

async function getShowcaseProduct() {
  const product = await prisma.product.findFirst({
    select: {
      name: true,
      slug: true,
    },
    where: {
      showcase: true,
    },
  });
  return product;
}

const Hero = async () => {
  const product = await getShowcaseProduct();
  return (
    <div className="container mx-auto flex h-[729px] max-w-screen-xl flex-col items-center xl:items-start">
      <Navbar>
        {/* @ts-expect-error Server Component */}
        <Nav />
      </Navbar>
      <div className="flex w-[60%] flex-1 flex-col items-center justify-center space-y-7 text-center sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[40%] xl:items-start xl:text-left">
        <p className="text-xs uppercase leading-5 tracking-[10px] text-white/50 sm:text-sm">
          New product
        </p>
        <h1 className="text-4xl font-bold uppercase leading-10 tracking-wider text-white md:text-5xl md:leading-[3.625rem]">
          {product?.name}
        </h1>
        <p className="text-white/75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button
          href={`product/${product?.slug}`}
          intent={'primary'}
          title="See product"
        >
          See product
        </Button>
      </div>
    </div>
  );
};

export default Hero;
