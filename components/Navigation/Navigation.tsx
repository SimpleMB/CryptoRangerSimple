import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navigation.module.scss';

interface Props {
  extended?: boolean;
}

enum PagePathnames {
  paidReview = '/',
  freeReview = '/freereview',
  boringStuff = '/boringstuff',
}

const Navigation: React.FC<Props> = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.navigation}>
      <img src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" />

      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <a
              className={
                pathname === PagePathnames.paidReview
                  ? styles.activeLink
                  : undefined
              }
            >
              Paid Review
            </a>
          </Link>
        </li>
        <li>
          <Link href="/freereview">
            <a
              className={
                pathname === PagePathnames.freeReview
                  ? styles.activeLink
                  : undefined
              }
            >
              Free Review
            </a>
          </Link>
        </li>
        <li>
          <Link href="/boringstuff">
            <a
              className={
                pathname === PagePathnames.boringStuff
                  ? styles.activeLink
                  : undefined
              }
            >
              Boring Stuff
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
// TODO : DONE - activated link when on proper site
