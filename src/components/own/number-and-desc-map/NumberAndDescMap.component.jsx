import React from 'react';
import styles from './NumberAndDescMap.module.scss';

const NumberAndDesc = ({ number = 1, desc }) => {
  return (
    <>
      <div className={styles['number']}>
        <div className={styles['number__num']}>{number}</div>
        <div className={styles['number__desc']}>{desc}</div>
      </div>
    </>
  );
};
export default React.memo(NumberAndDesc);
