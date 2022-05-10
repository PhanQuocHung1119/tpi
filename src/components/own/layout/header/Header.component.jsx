import styles from './Header.module.scss';
import Image from 'next/image';

import toan_phat_icon from '@assets/header/ToanPhat-Icon.png';
import language_icon from '@assets/header/language.png';
import caret_down from '@assets/header/caret-down.png';

const Header = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['icon-toan-phat']}>
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
        <div className={styles['menu']}>
          <div className={styles['menu__item']}>Giới thiệu</div>
          <div className={styles['menu__item']}>Lĩnh vực tiên phong</div>
          <div className={styles['menu__item']}>Mục tiêu phát triển</div>
          <div className={styles['menu__item']}>Khách hàng</div>
          <div className={styles['menu__item']}>Hỗ trợ</div>
          <div className={styles['menu__item']}>Liên hệ</div>
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
    </>
  );
};

export default Header;
