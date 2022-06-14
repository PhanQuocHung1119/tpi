import React, { useRef } from 'react';
import styles from './BestServices.module.scss';
import { SubBestServices } from './SubBestServices';
import { useObserverItem } from 'components/hook/useObserverItem';
import light from '@assets/best-services/Light.png';
import pencil from '@assets/best-services/pencil.png';
import Arrow_top from '@assets/best-services/Arrow-top.png';
const BestServices = () => {
  const refContainer = useRef();
  const refContent = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>Provide Best Services Industries</div>
        <div className={styles['content']} ref={refContent}>
          <SubBestServices icon={light} number={1} />
          <SubBestServices icon={pencil} number={2} />
          <SubBestServices icon={Arrow_top} number={3} />
        </div>
      </div>
    </>
  );
};
export default React.memo(BestServices);
