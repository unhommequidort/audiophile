import prisma from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';

export const revalidate = 3600;

async function getCategories() {
  let products = await prisma.product.findMany({
    select: {
      category: true,
    },
    distinct: ['category'],
  });
  return products;
}

const Nav = async () => {
  const products = await getCategories();
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
