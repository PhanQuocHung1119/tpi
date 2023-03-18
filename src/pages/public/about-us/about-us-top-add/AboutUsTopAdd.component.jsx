import React, { useRef } from 'react';
import styles from './AboutUsTopAdd.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import about_us_img from '@assets/about-us/About-Us-Image.png';

const title = `Thông điệp Ban Lãnh Đạo`;
const desc = `Lorem Ipsum`;

const AboutUsTopAdd = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-left']}>
          <NumberGeneralInfo title={title} desc={desc} />
        </div>
        <div className={styles['content-right']}>
          <div className={styles['icon-number']}>
            <Image
              src={about_us_img}
              alt=''
              width={580}
              height={513}
              layout='responsive'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(AboutUsTopAdd);
