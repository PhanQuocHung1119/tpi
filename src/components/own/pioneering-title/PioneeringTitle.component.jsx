import React, { useRef } from 'react';
import styles from './PioneeringTitle.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const PioneeringTitle = ({ number = 1, title }) => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['number']}>{number}</div>
        <div className={styles['content']}>
          <div className={styles['content__title']}>{title}</div>
          <div className={styles['content__line']}></div>
        </div>
      </div>
    </>
  );
};
export default React.memo(PioneeringTitle);
