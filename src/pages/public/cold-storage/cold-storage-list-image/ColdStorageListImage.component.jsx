import React from 'react';
import styles from './ColdStorageListImage.module.scss';
import Image from 'next/image';
import cold1 from '@assets/cold-storage/cold-1.png';
import cold2 from '@assets/cold-storage/cold-2.png';
import cold3 from '@assets/cold-storage/cold-3.png';
import cold4 from '@assets/cold-storage/cold-4.png';

const ColdStorageListImage = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['main-image']}>
          <Image
            src={cold1}
            alt=''
            width={1170}
            height={602}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['sub-image-wrapper']}>
          <div className={styles['sub-image']}>
            <Image
              src={cold2}
              alt=''
              width={381}
              height={283}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              quality={100}
            />
          </div>
          <div className={styles['sub-image']}>
            <Image
              src={cold3}
              alt=''
              width={381}
              height={283}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              quality={100}
            />
          </div>
          <div className={styles['sub-image']}>
            <Image
              src={cold4}
              alt=''
              width={381}
              height={283}
              layout='responsive'
              objectFit='contain'
              placeholder='blur'
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ColdStorageListImage;
