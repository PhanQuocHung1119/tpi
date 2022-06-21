import React from 'react';
import styles from './GoalsBanner.module.scss';
import Image from 'next/image';
import goals from '@assets/goals/Goals.png';

const GoalsBanner = () => {
  return (
    <>
      <div className={styles['container']}>
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
