import React, { useRef } from 'react';
import styles from './Introduce.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { introduce } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import introduce_img from '@assets/introduce/introduce-img.png';
import arrow_right from '@assets/introduce/arrow-right.png';

import Image from 'next/image';

const Introduce = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refArrLanguage = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(introduce, refArrLanguage);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['introduce-img']}>
          <Image
            src={introduce_img}
            alt=''
            width={1440}
            height={500}
            layout='responsive'
            objectFit='contain'
            quality={100}
            priority
          />
        </div>
        <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>
            {refArrLanguage.current?.title}
          </div>
          <div className={styles['content__desc']}>
            {refArrLanguage.current?.desc}
          </div>
          <div className={styles['content__btn']}>
            <div className={styles['detail']}>
              {refArrLanguage.current?.button}
            </div>
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
