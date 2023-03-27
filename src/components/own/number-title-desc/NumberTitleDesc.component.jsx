import React from 'react';
import styles from './NumberTitleDesc.module.scss';

const NumberTitleDesc = ({ number = 1, title, desc }) => {
  return (
    <>
      <div className={styles['number']}>
        <div className={styles['number__num']}>{number}</div>
        <div className={styles['number__title']}>{title}</div>
        <div className={styles['number__desc']}>{desc}</div>
      </div>
    </>
  );
};
export default React.memo(NumberTitleDesc);
