import React, { useRef } from 'react';
import styles from './ColdStorageTopContent.module.scss';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { NumberTitleDesc } from 'components/own/number-title-desc';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { coldStorageTopContent } from '@constants/language-option';

const ColdStorageTopContent = () => {
  const refContent = useRef(null);
  const refLang = useRef();
  useObserverItem(refContent, styles);
  useChooseLanguage(coldStorageTopContent, refLang);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <PioneeringTitle number={2} title={refLang.current?.title} />
        </div>
        <div className={styles['desc-wrapper']}>
          <div className={styles['desc-wrapper__title']}>
            {refLang.current?.title}
          </div>
          <div className={styles['desc-wrapper__desc']}>
            {refLang.current?.desc}
          </div>
        </div>
        <div className={styles['sub-content']} ref={refContent}>
          {refLang.current?.sub.map((item, index) => (
            <NumberTitleDesc key={index} number={index + 1} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(ColdStorageTopContent);
