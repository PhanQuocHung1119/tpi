import React, { useRef } from 'react';
import styles from './Breadcrumb.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import home_icon from '@assets/bread-crumb/Home-Icon.png';
import { isArray } from 'lodash';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { RoutePages } from '@constants/router';

const defaultData = [
  {
    locale: 'vi',
    sub: [{ path: '#', title: 'Giới thiệu về TPI' }],
  },
];

const Breadcrumb = ({ className, data = defaultData }) => {
  const refLang = useRef(null);
  useChooseLanguage(data, refLang);
  return (
    <>
      <article className={clsx(styles['breadcrumb'])}>
        <ul className={clsx(styles['breadcrumb__container'], className)}>
          <li className={styles['breadcrumb__link']}>
            <Link href={RoutePages.HOME_PAGE}>
              <div className={styles['icon-home']}>
                <Image
                  src={home_icon}
                  alt=''
                  width={16}
                  height={16}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
            </Link>
          </li>

          <li className={styles['breadcrumb__link']}>
            <Link href={RoutePages.HOME_PAGE}>
              <a>
                {refLang.current?.locale == `vi` ? `Trang chủ` : `Homepage`}
              </a>
            </Link>
          </li>

          {isArray(refLang.current?.sub) &&
            refLang.current?.sub.map((_d) => (
              <li
                className={styles['breadcrumb__link']}
                key={_d.path + _d.title}
              >
                <Link href={_d.path}>
                  <a>{_d.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </article>
    </>
  );
};
export default React.memo(Breadcrumb);
