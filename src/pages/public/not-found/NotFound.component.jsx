import { memo } from 'react';

import styles from './NotFound.module.scss';

import Link from 'next/link';
import { RoutePages } from '@constants/router';

const NotFound = ({
  title = '404 - Page not found',
  desc = `The page you are looking for might have been removed had its name
changed or is temporarily unavailable.`,
  hiddenLink,
}) => {
  return (
    <div className={styles['root']}>
      <div className={styles['notfound']}>
        <div className={styles['notfound-404']}>
          <h1>Oops!</h1>
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
        {!hiddenLink && (
          <Link href={RoutePages.HOME_PAGE} passHref>
            <div className={styles['button']}>Trở về trang chủ</div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default memo(NotFound);
