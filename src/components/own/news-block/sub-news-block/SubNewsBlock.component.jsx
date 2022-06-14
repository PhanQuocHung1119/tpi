import React, { useRef } from 'react';
import styles from './SubNewsBlock.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import birth from '@assets/icons/birth.png';

const SubNewsBlock = ({ image, time, title, desc }) => {
  const refContent = useRef(null);
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']} ref={refContent}>
        <div className={styles['main-image']}>
          <Image
            src={image}
            alt=''
            width={383}
            height={200}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['content-wrapper']}>
          <div className={styles['time']}>
            <div className={styles['time__image']}>
              <Image
                src={birth}
                alt=''
                width={29}
                height={29}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            {time}
          </div>
          <div className={styles['title']}>{title}</div>
          <div className={styles['desc']}>{desc}</div>
        </div>
      </div>
    </>
  );
};
export default SubNewsBlock;
