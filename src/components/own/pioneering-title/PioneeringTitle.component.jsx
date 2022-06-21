import React from 'react';
import styles from './PioneeringTitle.module.scss';

const PioneeringTitle = ({ number = 1, title }) => {
  return (
    <>
      <div className={styles['container']}>
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
