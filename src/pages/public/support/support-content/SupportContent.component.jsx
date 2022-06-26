import React, { useRef } from 'react';
import styles from './SupportContent.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { supportContent } from '@constants/language-option';

const SupportContent = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(supportContent, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['sub-content-wrapper']}>
          {refLang.current?.sub.map((item, idx) => (
            <div className={styles['sub-content']} key={idx}>
              <div className={styles['sub-content__title']}>{item.title}</div>
              <div className={styles['sub-content__desc']}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default SupportContent;
