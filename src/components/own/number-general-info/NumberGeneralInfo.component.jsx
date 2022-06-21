import React, { useRef } from 'react';
import styles from './NumberGeneralInfo.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const NumberGeneralInfo = ({ title, desc }) => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default React.memo(NumberGeneralInfo);
