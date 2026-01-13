import styles from '../../page.module.css';

// 1. Add 'async' before the function
export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 2. Add 'await' to get the slug out of the promise
  const { slug } = await params;

  // 3. Now you can safely use charAt
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ');

  return (
    <main className={styles.main}>
      <h1>{categoryName}</h1>
      <p>Explore our beautiful collection of handcrafted {categoryName.toLowerCase()}.</p>
      
      <div style={{ marginTop: '3rem', color: '#999' }}>
        Product listing for {categoryName} coming soon...
      </div>
    </main>
  );
}