import { prisma } from '@/lib/prisma';
import React from 'react';

const Nav = async () => {
  let products = await prisma.product.findMany({
    select: {
      category: true,
    },
    distinct: ['category'],
  });
  return (
    <nav className="flex space-x-[2.125rem] text-sm font-semibold uppercase">
      <a href="#" className="text-white transition-colors hover:text-peru">
        Home
      </a>
      {products.map((product) => (
        <a href="#" className="text-white transition-colors hover:text-peru">
          {product.category}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
