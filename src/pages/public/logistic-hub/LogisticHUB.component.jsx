import React from 'react';
import styles from './LogisticHUB.module.scss';
import Image from 'next/image';

import comingSoon from '@assets/logistic-hub/coming_soon.png';
import comingSoonBG from '@assets/logistic-hub/coming_soon_bg.png';
import comingSoonText from '@assets/logistic-hub/coming_soon_text.png';

const LogisticHUB = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['bg']}>
          <Image
            src={comingSoonBG}
            alt=''
            width='100vw'
            height={900}
            layout='fill'
            objectFit='fill'
            quality={100}
            loading='lazy'
          />
        </div>
        <div className={styles['text']}>
          <Image
            src={comingSoonText}
            alt=''
            width={478}
            height={46}
            layout='responsive'
            objectFit='contain'
            quality={100}
            loading='lazy'
          />
        </div>
      </div>
    </>
  );
};
export default LogisticHUB;
