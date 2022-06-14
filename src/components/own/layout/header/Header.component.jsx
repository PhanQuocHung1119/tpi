import React, { useRef, useState, useCallback } from 'react';
import styles from './Header.module.scss';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';
import { useClickOutside } from 'components/hook';
import { handleAnim, useObserverItem } from 'components/hook/useObserverItem';

import Image from 'next/image';
import { produce } from 'immer';
import clsx from 'clsx';

import toan_phat_icon from '@assets/header/ToanPhat-Icon.png';
import toan_phat_mobile_icon from '@assets/header/ToanPhat-Mobile-Icon.png';
import language_icon from '@assets/header/language.png';
import setting_icon from '@assets/header/Setting-Icon.png';

const dataPopup = {
  open: false,
};

const Header = () => {
  const router = useRouter();

  const ref = useRef();
  const refMenu = useRef();

  const [openMenu, setOpenMenu] = useState(dataPopup);

  const redirectToPage = useCallback((_link) => {
    router.push(_link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useObserverItem(refMenu, styles);

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
          <div
            className={styles['icon-toan-phat']}
            onClick={() => redirectToPage(RoutePages.HOME_PAGE)}
          >
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
          <div className={styles['menu']} ref={refMenu}>
            <div
              className={styles['menu__item']}
              onClick={() => redirectToPage(RoutePages.ABOUT_US)}
            >
              Giới thiệu
            </div>
            <div className={styles['menu__line']}></div>
            <div className={styles['menu__item--more']}>
              <div className={styles['sub-title']}>Lĩnh vực tiên phong</div>

              <div className={styles['arrow-wrapper']}>
                <div className={styles['arrow']}></div>
              </div>
              <div className={styles['sub-item-wrapper']}>
                <div
                  className={styles['sub-item']}
                  onClick={() => redirectToPage(RoutePages.FOOD_IRRADIATION)}
                >
                  Chiếu xạ
                </div>
                <div
                  className={styles['sub-item']}
                  onClick={() => redirectToPage(RoutePages.COLD_STORAGE)}
                >
                  Kho lạnh lưu trữ
                </div>
              </div>
            </div>
            <div className={styles['menu__line']}></div>
            <div
              className={styles['menu__item']}
              onClick={() => redirectToPage(RoutePages.GOALS)}
            >
              Mục tiêu phát triển
            </div>
            <div className={styles['menu__line']}></div>
            <div
              className={styles['menu__item']}
              onClick={() => redirectToPage(RoutePages.CUSTOMER)}
            >
              Khách hàng
            </div>
            <div className={styles['menu__line']}></div>
            <div
              className={styles['menu__item']}
              onClick={() => redirectToPage(RoutePages.SUPPORT)}
            >
              Hỗ trợ
            </div>
            <div className={styles['menu__line']}></div>
            <div
              className={styles['menu__item']}
              onClick={() => redirectToPage(RoutePages.QUESTION_AND_ANSWER)}
            >{`Q&A`}</div>
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
            onClick={(e) => {
              handleAnim(refMenu, styles);
              setOpenMenu(
                produce((data) => {
                  data.open = true;
                })
              );
            }}
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
          <div
            className={styles['menu-mobile__toan-phat-icon']}
            onClick={() => redirectToPage(RoutePages.HOME_PAGE)}
          >
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
