import React from 'react';
import styles from './SupportBanner.module.scss';
import Image from 'next/image';
import banner from '@assets/support/support-banner.png';
const SupportBanner = () => {
  return (
    <>
      <div className={styles['container']}>
        <Image
          src={banner}
          alt=''
          width={1440}
          height={400}
          layout='responsive'
          objectFit='contain'
          quality={100}
        />
      </div>
    </>
  );
};
export default SupportBanner;
