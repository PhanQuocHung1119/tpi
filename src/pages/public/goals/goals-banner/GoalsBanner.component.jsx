import React, { useRef } from 'react';
import styles from './GoalsBanner.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import goals from '@assets/goals/Goals.png';

const GoalsBanner = () => {
  const refContent = useRef();
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']} ref={refContent}>
        <Image
          src={goals}
          alt=''
          width={1440}
          height={600}
          layout='responsive'
          objectFit='contain'
          quality={100}
        />
      </div>
    </>
  );
};
export default React.memo(GoalsBanner);
