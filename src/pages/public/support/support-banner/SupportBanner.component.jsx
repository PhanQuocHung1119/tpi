import React, { useRef } from 'react';
import styles from './SupportBanner.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import banner from '@assets/support/support-banner.png';

const SupportBanner = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <Image
          src={banner}
          alt=''
          width={1440}
          height={400}
          layout='responsive'
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
    </>
  );
};
export default SupportBanner;
