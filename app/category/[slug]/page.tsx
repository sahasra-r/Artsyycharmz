import { prisma } from '@/lib/prisma'; // 1. Added this import
import styles from '../../page.module.css';

// 2. DELETED: The old "const prisma = new PrismaClient({...})" block is gone

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // 1. Fetch products from the database that match this category
  // This now uses the shared client from your /lib folder
  const products = await prisma.product.findMany({
    where: { category: slug }
  });

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  return (
    <main className={styles.main}>
      <h1 style={{ color: '#880e4f', textAlign: 'center', marginTop: '2rem' }}>{categoryName}</h1>
      <p style={{ textAlign: 'center' }}>Explore our beautiful collection of handcrafted {categoryName.toLowerCase()}.</p>

      {/* 2. Display the products in a neat grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem', 
        padding: '2rem' 
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            border: '1px solid #eee', 
            borderRadius: '15px', 
            padding: '1rem', 
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3 style={{ margin: '1rem 0 0.5rem', color: '#333' }}>{product.name}</h3>
            <p style={{ color: '#880e4f', fontWeight: 'bold', fontSize: '1.2rem' }}>₹{product.price}</p>
            <button style={{ 
              background: '#880e4f', 
              color: 'white', 
              border: 'none', 
              padding: '0.7rem 1.5rem', 
              borderRadius: '25px', 
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '3rem', color: '#999' }}>
          No products found in this category yet.
        </p>
      )}
    </main>
  );
}