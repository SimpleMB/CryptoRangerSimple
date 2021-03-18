import Link from 'next/link';
import styles from './Navigation.module.scss';

interface Props {
  extended?: boolean;
}

const Navigation: React.FC<Props> = ({ extended }) => {
  const active = true;

  return (
    <nav className={styles.navigation}>
      <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />

      <ul className={styles.navList}>
        <li>
          <Link href="/paidreview">
            <a className={active && styles.activeLink}>Paid Review</a>
          </Link>
        </li>
        <li>
          <Link href="/freereview">Free Review</Link>
        </li>
        <li>
          <Link href="/boringstuff">Boring Stuff</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
// TODO : activated link when on proper site
