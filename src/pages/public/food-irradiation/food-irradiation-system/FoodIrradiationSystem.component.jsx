import React, { useRef } from 'react';
import styles from './FoodIrradiationSystem.module.scss';
import Image from 'next/image';
import { foodIrradiationSystem } from '@constants/language-option';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import pictureSrc1 from '@assets/food-irradiation/food-irradiation-system1.png';
import pictureSrc2 from '@assets/food-irradiation/food-irradiation-system2.png';
import pictureSrc3 from '@assets/food-irradiation/food-irradiation-system3.png';
import { ref } from 'yup';

const action = [
  { source: pictureSrc1 },
  { source: pictureSrc2 },
  { source: pictureSrc3 },
];

const FoodIrradiationSystem = () => {
  const refContainer = useRef();
  const refLang = useRef(null);

  useObserverItem(refContainer, styles);
  useChooseLanguage(foodIrradiationSystem, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>
          <PioneeringTitle number={1} title={refLang.current?.title} />
        </div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['sub-content-wrapper']}>
          {refLang.current?.subDesc.map((item, index) => (
            <div className={styles['sub-content']} key={index}>
              <div className={styles['sub-content__image']}>
                <Image
                  src={action[index].source}
                  alt=''
                  width={383}
                  height={200}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                  loading='lazy'
                />
              </div>
              <div className={styles['sub-content__desc']}>{item?.desc}</div>
            </div>
          ))}
        </div>
        <div className={styles['concludedesc']}>
          {refLang.current?.concludeDesc}
        </div>
      </div>
    </>
  );
};
export default React.memo(FoodIrradiationSystem);
