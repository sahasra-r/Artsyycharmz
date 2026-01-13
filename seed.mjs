import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // This clears old data so you don't get duplicates
  await prisma.product.deleteMany({});

  await prisma.product.createMany({
    data: [
      {
        name: 'Pink Rose Bouquet',
        description: 'A beautiful handcrafted yarn bouquet.',
        price: 599.0,
        image: 'https://placehold.co/400x400?text=Pink+Bouquet',
        category: 'bouquets',
      },
      {
        name: 'Daisy Keychain',
        description: 'Adorable crochet daisy for your keys.',
        price: 199.0,
        image: 'https://placehold.co/400x400?text=Daisy+Keychain',
        category: 'keychains',
      },
      {
        name: 'Mini Succulent Pot',
        description: 'Perfect little flower pot for your desk.',
        price: 349.0,
        image: 'https://placehold.co/400x400?text=Flower+Pot',
        category: 'flower-pots',
      },
    ],
  });
  console.log('Database seeded with Artsy products! 💐');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());