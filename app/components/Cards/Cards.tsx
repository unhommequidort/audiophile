import Card from './Card/Card';
import { prisma } from '@/lib/prisma';

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

const Cards = async () => {
  const products = await getCategories();
  return (
    <section className="w-full px-6">
      <div className="container mx-auto mt-[7.5rem] flex max-w-screen-xl flex-col items-center justify-between gap-4 sm:flex-row">
        {products.map((product) => (
          <Card key={product.category} category={product.category} />
        ))}
      </div>
    </section>
  );
};

export default Cards;
