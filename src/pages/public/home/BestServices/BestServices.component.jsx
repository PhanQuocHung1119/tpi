import React from 'react';
import styles from './BestServices.module.scss';
import { SubBestServices } from './SubBestServices';

const BestServices = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Provide Best Services Industries</div>
        <div className={styles['content']}>
          <SubBestServices />
          <SubBestServices />
          <SubBestServices />
        </div>
      </div>
    </>
  );
};
export default React.memo(BestServices);
