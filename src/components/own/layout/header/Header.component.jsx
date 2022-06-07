import React, { useRef, useState } from 'react';

import { useClickOutside } from 'components/hook';
import styles from './Header.module.scss';
import Image from 'next/image';
import { produce } from 'immer';
import clsx from 'clsx';
import Link from 'next/link';

import toan_phat_icon from '@assets/header/ToanPhat-Icon.png';
import toan_phat_mobile_icon from '@assets/header/ToanPhat-Mobile-Icon.png';
import language_icon from '@assets/header/language.png';
import setting_icon from '@assets/header/Setting-Icon.png';

const dataPopup = {
  open: false,
};

const Header = () => {
  const ref = useRef();
  const [openMenu, setOpenMenu] = useState(dataPopup);

  useClickOutside(ref, () =>
    setOpenMenu(
      produce((data) => {
        data.open = false;
      })
    )
  );

  return (
    <>
      <div className={styles['container']}>
        <div
          ref={ref}
          className={clsx(styles['wrapper'], {
            [`${styles['wrapper']} ${styles['active']}`]: openMenu.open,
          })}
        >
          <div className={styles['icon-toan-phat']}>
            <div className={styles['icon-toan-phat__icon-desktop']}>
              <Image
                src={toan_phat_icon}
                alt=''
                width={56}
                height={46}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['icon-toan-phat__icon-mobile']}>
              <Image
                src={toan_phat_mobile_icon}
                alt=''
                width={56}
                height={46}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
          <div className={styles['menu']}>
            <Link href={'/about-us' || '#'} passHref>
              <div className={styles['menu__item']}>Giới thiệu</div>
            </Link>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item--more']}>
              <div className={styles['sub-title']}>Lĩnh vực tiên phong</div>
              <div className={styles['arrow']}></div>
              <div className={styles['sub-item-wrapper']}>
                <Link href={'/food-irradiation' || '#'} passHref>
                  <div className={styles['sub-item']}>Chiếu xạ</div>
                </Link>
                <Link href={'/cold-storage' || '#'} passHref>
                  <div className={styles['sub-item']}>Kho lạnh lưu trữ</div>
                </Link>
              </div>
            </div>
            <div className={styles['menu__line']}></div>
            <Link href={'/goals' || '#'} passHref>
              <div className={styles['menu__item']}>Mục tiêu phát triển</div>
            </Link>
            <div className={styles['menu__line']}></div>
            <Link href={'/customer' || '#'} passHref>
              <div className={styles['menu__item']}>Khách hàng</div>
            </Link>
            <div className={styles['menu__line']}></div>
            <Link href={'/support' || '#'} passHref>
              <div className={styles['menu__item']}>Hỗ trợ</div>
            </Link>
            <div className={styles['menu__line']}></div>
            <Link href={'/question-and-answer' || '#'} passHref>
              <div className={styles['menu__item']}>{`Q&A`}</div>
            </Link>
            <div className={styles['menu__line']}></div>
          </div>
          <div className={styles['language']}>
            <div className={styles['language__icon']}>
              <Image
                src={language_icon}
                alt=''
                width={24}
                height={24}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['language__caret-down']}></div>
          </div>
        </div>
        <div className={styles['menu-mobile']}>
          <div
            className={styles['menu-mobile__setting-icon']}
            onClick={() =>
              setOpenMenu(
                produce((data) => {
                  data.open = true;
                })
              )
            }
          >
            <Image
              src={setting_icon}
              alt=''
              width={24}
              height={24}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['menu-mobile__toan-phat-icon']}>
            <Image
              src={toan_phat_icon}
              alt=''
              width={43}
              height={36}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
        <div
          className={clsx(styles['header-backdrop'], {
            [`${styles['header-backdrop']} ${styles['active']}`]: openMenu.open,
          })}
        ></div>
      </div>
    </>
  );
};

export default Header;
