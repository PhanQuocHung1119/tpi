import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import ToanPhat from '@assets/header/ToanPhat-Icon.svg';
import social from '@assets/icons/social-icon.png';

const Footer = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['content']}>
            <div className={styles['content__title']}>Explore</div>
            <div className={styles['content__sub']}>About Us</div>
            <div className={styles['content__sub']}>Who we are</div>
            <div className={styles['content__sub']}>Why we exist</div>
            <div className={styles['content__sub']}>What we do</div>
            <div className={styles['content__sub']}>Branches</div>
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
                placeholder='blur'
                quality={100}
              />
            </div>
            <div className={styles['content-mid__social-icon']}>
              <Image
                src={social}
                alt=''
                width={72}
                height={20}
                layout='responsive'
                objectFit='contain'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
          <div className={styles['content']}>
            <div className={styles['content__title']}>Explore</div>
            <div className={styles['content__sub']}>Technical Solution</div>
            <div className={styles['content__sub']}>Factory Solution</div>
            <div className={styles['content__sub']}>Who Can Benefit?</div>
          </div>
        </div>
        <div className={styles['bottom']}>
          <div className={styles['bottom__bar']}></div>
          <div className={styles['bottom__desc']}>
            2022 ©︎Arches Pte. Ltd. All rights Reserved. -- Privacy Policy -
            Terms of Services - support@toanphat.com
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
