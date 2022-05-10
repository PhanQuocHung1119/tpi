import React from 'react';
import styles from './BestServices.module.scss';
import { SubBestServices } from './SubBestServices';
import light from '@assets/best-services/Light.png';
import pencil from '@assets/best-services/pencil.png';
import Arrow_top from '@assets/best-services/Arrow-top.png';
const BestServices = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Provide Best Services Industries</div>
        <div className={styles['content']}>
          <SubBestServices icon={light} number={1} />
          <SubBestServices icon={pencil} number={2} />
          <SubBestServices icon={Arrow_top} number={3} />
        </div>
      </div>
    </>
  );
};
export default React.memo(BestServices);
