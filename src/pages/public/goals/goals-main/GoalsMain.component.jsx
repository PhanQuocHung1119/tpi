import React, { useRef } from 'react';
import styles from './GoalsMain.module.scss';
import { NumberAndDesc } from 'components/own/number-and-desc';
import { useObserverItem } from 'components/hook/useObserverItem';
import { goalsMain } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

const GoalsMain = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(goalsMain, refLang);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['content-wrapper']}>
          {refLang.current?.sub.map((item, index) => (
            <NumberAndDesc key={index} number={item.number} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(GoalsMain);
