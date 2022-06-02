import React, { useRef, useState } from 'react';

import { useClickOutside } from 'components/hook';
import styles from './Header.module.scss';
import Image from 'next/image';
import { produce } from 'immer';
import clsx from 'clsx';

import toan_phat_icon from '@assets/header/ToanPhat-Icon.png';
import toan_phat_mobile_icon from '@assets/header/ToanPhat-Mobile-Icon.png';
import language_icon from '@assets/header/language.png';
import caret_down from '@assets/header/caret-down.png';
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
            <div className={styles['menu__item']}>Giới thiệu</div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item']}>Lĩnh vực tiên phong</div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item']}>Mục tiêu phát triển</div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item']}>Khách hàng</div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item']}>Hỗ trợ</div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item']}>Liên hệ</div>
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
            <div className={styles['language__caret-down']}>
              <Image
                src={caret_down}
                alt=''
                width={16}
                height={16}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
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
              width={56}
              height={46}
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
