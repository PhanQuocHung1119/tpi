import React, { useRef } from 'react';
import styles from './SubMethodIrradiation.module.scss';
import Image from 'next/image';
import { SubMethodStep } from './sub-method-step';
import { subMethodIrradiation } from '@constants/language-option';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import method_image from '@assets/food-irradiation/method-image.png';

const SubMethodIrradiation = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(subMethodIrradiation, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-left']}>
          <div className={styles['content-left__title']}>
            {refLang.current?.title}
          </div>
          {/*<div className={styles['content-left__step']} ref={refContent}>
            {refLang.current?.sub.map((item, index) => (
              <SubMethodStep
                key={index}
                number={item.number}
                fullLine={item.fullLine}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>*/}
            
        </div>
        <div className={styles['content-right']}>
          <div className={styles['content-right__image']}>
            <Image
              src={method_image}
              alt=''
              width={683}
              height={353}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div
            className={styles['content-right__desc']}
          >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, feugiat morbi laoreet nisi, dictum. Purus tellus ut lectus quis mattis pretium luctus. Morbi faucibus libero pellentesque odio tincidunt lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, feugiat morbi laoreet nisi, dictum. Purus tellus ut lectus quis mattis pretium luctus. Morbi faucibus libero `}</div>
        </div>
      </div>
    </>
  );
};
export default React.memo(SubMethodIrradiation);
