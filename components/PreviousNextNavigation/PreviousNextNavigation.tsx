import Link from 'next/link';
import styles from './PreviousNextNavigation.module.scss';

interface PreviousNextProps {
  next?: string;
  previous?: string;
}

const PreviousNextNavigation: React.FC<PreviousNextProps> = ({
  next,
  previous,
}) => {
  return (
    <div className={styles.previousNextWrapper}>
      <Link href={previous}>
        <button
          type="button"
          className={styles.previousNextBtn}
          disabled={!previous}
        >
          Previous
        </button>
      </Link>
      <Link href={next}>
        <button
          type="button"
          className={styles.previousNextBtn}
          disabled={!next}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default PreviousNextNavigation;
