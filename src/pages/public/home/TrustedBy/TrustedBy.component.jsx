import React, { useRef } from 'react';
import styles from './TrustedBy.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';

import icon_1 from '@assets/trusted-by/trusted-by-1.png';
import icon_2 from '@assets/trusted-by/trusted-by-2.png';
import icon_3 from '@assets/trusted-by/trusted-by-3.png';
import icon_4 from '@assets/trusted-by/trusted-by-4.png';
import icon_5 from '@assets/trusted-by/trusted-by-5.png';
import icon_6 from '@assets/trusted-by/trusted-by-6.png';
import icon_7 from '@assets/trusted-by/trusted-by-7.png';
import icon_8 from '@assets/trusted-by/trusted-by-8.png';
import icon_9 from '@assets/trusted-by/trusted-by-9.png';
import icon_10 from '@assets/trusted-by/trusted-by-10.png';
import icon_11 from '@assets/trusted-by/trusted-by-11.png';
import icon_12 from '@assets/trusted-by/trusted-by-12.png';

const icons = [
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  icon_10,
  icon_11,
  icon_12,
];
const TrustedBy = () => {
  const refContentWrapper = useRef();
  useObserverItem(refContentWrapper, styles);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Trusted by the Top-tier Companies</div>
        <div className={styles['content-wrapper']} ref={refContentWrapper}>
          {icons.map((item, index) => (
            <div className={styles['content']} key={index}>
              <div className={styles['content__icon-arrow-right']}>
                <Image
                  src={item}
                  alt=''
                  width={142}
                  height={95}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(TrustedBy);
