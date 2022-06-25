import React from 'react';
import styles from './SubMethodStep.module.scss';
import clsx from 'clsx';

const SubMethodStep = ({ number = 1, fullLine = true, title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-left']}>
          <div
            className={clsx(styles['content-left__number'], {
              [`${styles['content-left__number']} ${styles['active']}`]:
                fullLine,
            })}
          >
            {number}
          </div>
          <div
            className={clsx(styles['content-left__line'], {
              [`${styles['content-left__line']} ${styles['active']}`]: fullLine,
            })}
          ></div>
        </div>
        <div className={styles['content-right']}>
          <div className={styles['content-right__title']}>{title}</div>
          <div className={styles['content-right__desc']}>{desc}</div>
        </div>
      </div>
    </>
  );
};
export default React.memo(SubMethodStep);
