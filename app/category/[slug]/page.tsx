import styles from '../../page.module.css'; // Reusing your artsy styles

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // We capitalize the slug (e.g., "bouquets" becomes "Bouquets")
  const categoryName = params.slug.charAt(0).toUpperCase() + params.slug.slice(1).replace('-', ' ');

  return (
    <main className={styles.main}>
      <h1>{categoryName}</h1>
      <p>Explore our beautiful collection of handcrafted {categoryName.toLowerCase()}.</p>
      
      {/* Soon we will fetch actual products from your database here! */}
      <div style={{ marginTop: '3rem', color: '#999' }}>
        Product listing for {categoryName} coming soon...
      </div>
    </main>
  );
}