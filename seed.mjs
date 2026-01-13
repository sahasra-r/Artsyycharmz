import pkg from '@prisma/client';
const { PrismaClient } = pkg;

// We leave this empty so it doesn't trigger "Unknown property" errors
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Artsyycharmz: Attempting to seed...');
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
      }
    ],
  });
  console.log('✅ Success! Database seeded! 💐');
}

main()
  .catch((e) => { console.error('❌ Seeding failed:', e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });