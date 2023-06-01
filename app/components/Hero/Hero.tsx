import { prisma } from '@/lib/prisma';
import Nav from '../Header/Nav/Nav';
import Navbar from '../Header/Navbar';

const Hero = async () => {
  let product = await prisma.product.findFirst({
    select: {
      name: true,
    },
    where: {
      showcase: true,
    },
  });
  return (
    <div className="container mx-auto flex h-[729px] max-w-screen-xl flex-col">
      <Navbar>
        {/* @ts-expect-error Server Component */}
        <Nav />
      </Navbar>
      <div className="flex flex-1 flex-col items-center justify-center text-center xl:w-[40%] xl:items-start xl:text-left">
        <p className="text-sm uppercase leading-5 tracking-[10px] text-white/50">
          New product
        </p>
        <h1 className="text-4xl font-semibold uppercase leading-10 tracking-wider text-white md:text-5xl md:leading-[3.625rem]">
          {product?.name}
        </h1>
        <p className="text-white/75">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
    </div>
  );
};

export default Hero;
