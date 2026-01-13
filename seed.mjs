import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// Prisma 7 requires explicit configuration in the constructor
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./dev.db',
    },
  },
});

async function main() {
  console.log('🌱 Starting to seed Artsyycharmz products...');
  
  // This clears old data to prevent errors if you run it twice
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
      }
    ],
  });
  
  console.log('✅ Success! Database seeded! 💐');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });