import React, { useRef, useState, useCallback, useMemo } from 'react';
import styles from './Header.module.scss';
import { RoutePages } from '@constants/router';
import { headerMenu } from '@constants/language-option';

import { useRouter } from 'next/router';
import { useClickOutside } from 'components/hook';
import { handleAnim, useObserverItem } from 'components/hook/useObserverItem';

import Image from 'next/image';
import { produce } from 'immer';
import clsx from 'clsx';

import toan_phat_icon from '@assets/header/ToanPhat-Icon.svg';
import toan_phat_mobile_icon from '@assets/header/ToanPhat-Mobile-Icon.svg';
import flag_us from '@assets/header/flag-us.png';
import flag_viet_nam from '@assets/header/flag-viet-nam.png';
import setting_icon from '@assets/header/Setting-Icon.png';

const dataPopup = {
  open: false,
};

const Header = () => {
  const router = useRouter();

  const ref = useRef();
  const refMenu = useRef();
  const refLanguage = useRef();

  const [openMenu, setOpenMenu] = useState(dataPopup);

  const arrMenu = useMemo(
    () => {
      return headerMenu.find((item) => item.locale === router.locale).titles;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.locale, headerMenu]
  );

  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );

  const activeLanguage = useCallback(
    (e) => {
      let elmnt = e.currentTarget.classList;
      elmnt.toggle(styles['active']);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styles]
  );

  const chooseLanguage = useCallback(
    (_language) => {
      router.push('#', '#', { locale: _language });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.locale]
  );

  useObserverItem(refMenu, styles);

  useClickOutside(ref, () =>
    setOpenMenu(
      produce((data) => {
        data.open = false;
      })
    )
  );

  useClickOutside(refLanguage, () => {
    let elmnt = refLanguage.current.classList;
    elmnt.remove(styles['active']);
  });

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
            {arrMenu.map((item, index) => (
              <React.Fragment key={index}>
                {!item.status ? (
                  <>
                    <div
                      className={styles['menu__item']}
                      onClick={() => redirectToPage(item.link)}
                    >
                      {item.title}
                    </div>
                    <div className={styles['menu__line']}></div>
                  </>
                ) : item.status === 'wrapper' ? (
                  <>
                    <div className={styles['menu__item--more']}>
                      <div className={styles['sub-title']}>{item.title}</div>
                      <div className={styles['arrow-wrapper']}>
                        <div className={styles['arrow']}></div>
                      </div>
                      <div className={styles['sub-item-wrapper']}>
                        {item.sub.map((_item, _index) => (
                          <div
                            className={styles['sub-item']}
                            key={_index}
                            onClick={() => redirectToPage(_item.link)}
                          >
                            {_item.title}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={styles['menu__line']}></div>
                  </>
                ) : (
                  ''
                )}
              </React.Fragment>
            ))}
          </div>
          <div
            className={styles['language']}
            onClick={(e) => activeLanguage(e)}
            ref={refLanguage}
          >
            <div className={styles['language__icon']}>
              <Image
                src={router.locale === 'vi' ? flag_viet_nam : flag_us}
                alt=''
                width={24}
                height={24}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['language__caret-down']}></div>
            <div className={styles['language-option']}>
              <div
                className={styles['language-option__sub-item']}
                onClick={() => chooseLanguage('en-US')}
              >
                English
              </div>
              <div
                className={styles['language-option__sub-item']}
                onClick={() => chooseLanguage('vi')}
              >
                VietNam
              </div>
            </div>
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

export default React.memo(Header);
