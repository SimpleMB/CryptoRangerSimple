import React from 'react';
import Link from 'next/link';
import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsLinkProps {
  children: string;
  active: boolean;
  href?: string;
}

/* eslint-disable @typescript-eslint/indent */
const BreadCrumbsLink = React.forwardRef<
  HTMLAnchorElement,
  BreadCrumbsLinkProps
>(({ children, href, active }, ref) => {
  return (
    <a
      className={[
        styles.breadCrumbsLink,
        active ? styles.breadCrumbActive : undefined,
      ].join(' ')}
      href={href}
      ref={ref}
    >
      {children}
    </a>
  );
});
/* eslint-enable @typescript-eslint/indent */

interface BreadCrumbsProps {
  position: number;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ position }) => {
  return (
    <nav className={styles.breadCrumbs}>
      <ul className={styles.breadCrumbsList}>
        <Link href="/paid/basicinformation" passHref>
          <BreadCrumbsLink active={position >= 0}>
            Basic informations
          </BreadCrumbsLink>
        </Link>
        <Link href="/paid/exampleofuse" passHref>
          <BreadCrumbsLink active={position >= 1}>
            Example of use
          </BreadCrumbsLink>
        </Link>
        <Link href="/paid/features" passHref>
          <BreadCrumbsLink active={position >= 2}>
            Projects features
          </BreadCrumbsLink>
        </Link>
        <Link href="/paid/team" passHref>
          <BreadCrumbsLink active={position >= 3}>Team</BreadCrumbsLink>
        </Link>
        <Link href="/paid/languageandpayment" passHref>
          <BreadCrumbsLink active={position >= 4}>
            Language and Payment
          </BreadCrumbsLink>
        </Link>
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
