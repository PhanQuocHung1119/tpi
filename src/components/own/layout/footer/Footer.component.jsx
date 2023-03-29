import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import ToanPhat from '@assets/header/ToanPhat-Icon.svg';
import socialYoutube from '@assets/icons/social-icon-youtube.png';
import socialFacebook from '@assets/icons/social-icon-facebook.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['content']}>
            <div className={styles['content__title']}>
              Nhà Máy Chiếu Xạ Toàn Phát
            </div>
            <div className={styles['content__sub']}>
              Hotline 24/7: 0272 3786 888
            </div>
            <div className={styles['content__sub']}>
              Email: info@tpirr.vn - tiepnhan@tpirr.vn{' '}
            </div>
          </div>
          <div className={styles['content-mid']}>
            <div className={styles['content-mid__icon-toan-phat']}>
              <Image
                src={ToanPhat}
                alt=''
                width={209}
                height={172}
                layout='responsive'
                objectFit='contain'
                quality={100}
                loading='lazy'
              />
            </div>
            <div className={styles['content-mid-social']}>
              <div className={styles['content-mid-social__social-icon']}>
                <Link href='https://www.facebook.com/kholanhtoanphat/' passHref>
                  <Image
                    src={socialFacebook}
                    alt=''
                    width={20}
                    height={20}
                    layout='responsive'
                    objectFit='contain'
                    quality={100}
                    loading='lazy'
                  />
                </Link>
              </div>
              <div className={styles['content-mid-social__social-icon']}>
                <Link
                  href='https://www.youtube.com/channel/UCJoEaA2uVz0YXs2iWCanQOA'
                  passHref
                >
                  <Image
                    src={socialYoutube}
                    alt=''
                    width={20}
                    height={20}
                    layout='responsive'
                    objectFit='contain'
                    quality={100}
                    loading='lazy'
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['content__title']}>Kho Lạnh Toàn Phát</div>
            <div className={styles['content__sub']}>
              Hotline 24/7: 092 191 69 99
            </div>
            <div className={styles['content__sub']}>
              Email: info@tprw.vn - tiepnhan@tprw.vn
            </div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['bottom__bar']}></div>
          <div className={styles['bottom__desc']}>
            2022 ©︎TOAN PHAT GROUP. Ltd. All rights Reserved.
            support@toanphat.com
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
