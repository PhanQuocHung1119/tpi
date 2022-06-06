import React from 'react';
import styles from './FoodIrradiationSystem.module.scss';
import Image from 'next/image';
import system from '@assets/food-irradiation/food-irradiation-system.png';
import { PioneeringTitle } from 'components/own/pioneering-title';

const FoodIrradiationSystem = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <PioneeringTitle number={1} title='Chiếu xạ' />
        </div>
        <div className={styles['desc']}>
          TPI - Nhà máy duy nhất tại Việt Nam ứng dụng đầy đủ 3 công nghệ chiếu
          xạ:
        </div>
        <div className={styles['sub-content-wrapper']}>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__image']}>
              <Image
                src={system}
                alt=''
                width={383}
                height={200}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['sub-content__desc']}>
              Dây chuyền chiếu xạ bằng nguồn CoBalt 60 sử dụng tia gamma.
            </div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__image']}>
              <Image
                src={system}
                alt=''
                width={383}
                height={200}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['sub-content__desc']}>
              Hệ thống máy chiếu xạ bằng chùm tia điện tử (E-Beam) sử dụng chùm
              electron.
            </div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__image']}>
              <Image
                src={system}
                alt=''
                width={383}
                height={200}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
            <div className={styles['sub-content__desc']}>
              Hệ thống máy chiếu xạ Bremsstrahlung (X-ray) sử dụng tia X.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FoodIrradiationSystem;
