import React, { useRef } from 'react';
import styles from './LeaderIndustrial.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import leader from '@assets/leader-industrial/LeaderIndustrial.png';
import arrow_right from '@assets/introduce/arrow-right.png';

const LeaderIndustrial = () => {
  const refContainer = useRef();
  const refContent = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['image']}>
          <Image
            src={leader}
            alt=''
            width={720}
            height={584}
            layout='responsive'
            objectFit='contain'
            placeholder='blur'
            quality={100}
          />
        </div>
        <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>
            We are leader in industiral market
          </div>
          <div className={styles['content__desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
            consequat egestas dictum posuere pellentesque fermentum.
          </div>
          <div className={styles['content__sub-desc']}>
            <div className={styles['sub-desc']}>
              &bull;
              {`  Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
            </div>
            <div className={styles['sub-desc']}>
              &bull;
              {`  Metus, tristique faucibus sem sed aenean commodo velit.`}
            </div>
            <div className={styles['sub-desc']}>
              &bull;
              {`  Enim varius pellentesque posuere mattis.`}
            </div>
          </div>
          <div className={styles['content__button']}>
            Chi tiết
            <div className={styles['icon-arrow']}>
              <Image
                src={arrow_right}
                alt=''
                width={22}
                height={16}
                layout='responsive'
                objectFit='contain'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(LeaderIndustrial);
