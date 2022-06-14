import React, { useRef } from 'react';
import styles from './Introduce.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import introduce from '@assets/introduce/introduce-img.png';
import arrow_right from '@assets/introduce/arrow-right.png';

import Image from 'next/image';

const Introduce = () => {
  const refContainer = useRef();
  const refContent = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['introduce-img']}>
          <Image
            src={introduce}
            alt=''
            width={1440}
            height={500}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>
            Lorem ipsum dolor sit amet, consectetur
          </div>
          <div className={styles['content__desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem etiam
            luctus amet ultrices sapien id gravida iaculis mattis.
          </div>
          <div className={styles['content__btn']}>
            <div className={styles['detail']}>Chi tiết</div>
            <div className={styles['icon-arrow-right']}>
              <Image
                src={arrow_right}
                alt=''
                width={22}
                height={16}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(Introduce);
