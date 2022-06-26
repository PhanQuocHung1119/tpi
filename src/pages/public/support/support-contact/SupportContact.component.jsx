import React, { useRef } from 'react';
import styles from './SupportContact.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { supportContact } from '@constants/language-option';

const SupportContact = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(supportContact, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['content-wrapper']}>
          {refLang.current?.sub.map((item, idx) => (
            <div className={styles['sub-content']} key={idx}>
              <div className={styles['sub-content__title']}>{item.title}</div>
              <div className={styles['sub-content__line']}></div>
            </div>
          ))}
        </div>
        <div className={styles['contact-button']}>
          {refLang.current?.button}
        </div>
      </div>
    </>
  );
};
export default SupportContact;
