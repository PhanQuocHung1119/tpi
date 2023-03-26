import React, { useRef } from 'react';
import styles from './HumanResource.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { humanResource } from '@constants/language-option';
import Image from 'next/image';
import imageHR from '@assets/about-us/human-resource.png';
import arrow_right from '@assets/introduce/arrow-right.png';

const HumanResource = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLanguage = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(humanResource, refLanguage);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
      <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>
            {refLanguage.current?.title}
          </div>
          <div className={styles['content__desc']}>
            {refLanguage.current?.desc}
          </div>
          {/*<div className={styles['content__sub-desc']}>
            {refLanguage.current?.subDesc.map((item, index) => (
              <div className={styles['sub-desc']} key={index}>
                &bull;
                {` ${item.desc}`}
              </div>
            ))}
            </div>
          <div className={styles['content__button']}>
            {refLanguage.current?.button}
            <div className={styles['icon-arrow']}>
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
            </div>*/}
        </div>
        <div className={styles['image']}>
          <Image
            src={imageHR}
            alt=''
            width={720}
            height={584}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        
      </div>
    </>
  );
};
export default React.memo(HumanResource);
