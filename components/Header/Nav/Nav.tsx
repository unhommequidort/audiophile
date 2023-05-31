import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

const Nav = async () => {
  let products = await prisma.product.findMany({
    select: {
      category: true,
    },
    distinct: ['category'],
  });
  return (
    <nav className="hidden space-x-[2.125rem] text-sm font-bold uppercase md:flex">
      <Link
        href="/design"
        className="text-white transition-colors hover:text-peru"
      >
        Home
      </Link>
      {products.map((product) => (
        <Link
          key={product.category}
          href={`/category/${product.category}`}
          className="text-white transition-colors hover:text-peru"
        >
          {product.category}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
