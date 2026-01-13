import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Handcrafted Charms <br /> for Every Moment</h1>
        <p>Explore our unique collection of bouquets, keychains, and gift hampers.</p>
        <div className={styles.ctaButtons}>
          <Link href="/shop" className={styles.primaryBtn}>Shop Now</Link>
          <Link href="/about" className={styles.secondaryBtn}>Our Story</Link>
        </div>
      </section>

      {/* We will add Category Circles here next! */}

      <section className={styles.categoriesSection}>
        <h2>Shop by Category</h2>
        <div className={styles.categoryGrid}>
          {categories.map((cat) => (
            <Link href={`/category/${cat.slug}`} key={cat.slug} className={styles.categoryCard}>
              <div className={styles.categoryCircle}>
                <span className={styles.emoji}>{cat.image}</span>
              </div>
              <p>{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
