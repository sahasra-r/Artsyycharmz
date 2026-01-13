import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// Prisma 7 requires a non-empty object with valid configuration
const prisma = new PrismaClient({
  datasourceUrl: 'file:./dev.db',
  __internal: {
    debug: false
  }
});

async function main() {
  console.log('🌱 Artsyycharmz: Starting seed process...');
  
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
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });