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
    </main>
  );
}