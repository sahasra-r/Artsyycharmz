import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>Artsyycharmz</Link>
      
      <div className={styles.links}>
        <Link href="/" className={styles.iconLink}>Home</Link>
        <Link href="/wishlist" className={styles.iconLink}>❤️</Link>
        <Link href="/cart" className={styles.iconLink}>🛒</Link>
      </div>
    </nav>
  );
}