import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const data = await prisma.product.findMany();
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log('Error fetching products: ', error?.message);
      return new Response('Failed to fetch products!', { status: 500 });
    }
  }
}
