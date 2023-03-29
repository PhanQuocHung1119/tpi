import React from 'react';
import styles from './SubIrradiationFlow.module.scss';

import Image from 'next/image';

const SubIrradiationFlow = ({ icon, number, title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <div className={styles['content__icon-arrow-right']}>
            <Image
              src={icon}
              alt=''
              width={450}
              height={381}
              layout='responsive'
              objectFit='contain'
              quality={100}
              loading='lazy'
            />
          </div>
          <div className={styles['content__title']}>{title}</div>
          <div className={styles['content__desc']}>{desc}</div>
        </div>
        <div className={styles['number']}>{number}</div>
      </div>
    </>
  );
};
export default React.memo(SubIrradiationFlow);
