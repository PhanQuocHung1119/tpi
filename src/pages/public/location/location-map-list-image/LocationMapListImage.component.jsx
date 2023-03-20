import React, { useRef } from 'react';
import styles from './LocationMapListImage.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import map from '@assets/location/location.png';
import map2 from '@assets/cold-storage/cold-2.png';
import map3 from '@assets/cold-storage/cold-3.png';
import map4 from '@assets/cold-storage/cold-4.png';

const LocationMapListImage = () => {
  const refContent = useRef();
  useObserverItem(refContent, styles);
  return (
    <>
      <div className={styles['container']} ref={refContent}>
        <div className={styles['main-image']}>
          <Image
            src={map}
            alt=''
            width={1170}
            height={602}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['sub-image-wrapper']}>
          <div className={styles['sub-image']}>
            <Image
              src={map2}
              alt=''
              width={381}
              height={283}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['sub-image']}>
            <Image
              src={map3}
              alt=''
              width={381}
              height={283}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['sub-image']}>
            <Image
              src={map4}
              alt=''
              width={381}
              height={283}
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
export default React.memo(LocationMapListImage);
