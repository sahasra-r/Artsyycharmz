import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// Prisma 7 explicit initialization for SQLite
const prisma = new PrismaClient({
  datasourceUrl: 'file:./dev.db',
});

async function main() {
  console.log('🌱 Artsyycharmz: Starting database seed...');
  
  // Clean up to prevent unique constraint errors
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
  
  console.log('✅ Success! Your Artsy products are now in the database! 💐');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });