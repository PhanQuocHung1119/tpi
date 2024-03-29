import React, { useRef } from 'react';
import styles from './TrustedBy.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { trustedBy } from '@constants/language-option';

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

const icons = [icon_1, icon_2, icon_3, icon_4];
const TrustedBy = () => {
  const refContentWrapper = useRef();
  const refTitle = useRef();

  useObserverItem(refContentWrapper, styles);
  useChooseLanguage(trustedBy, refTitle);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>{refTitle.current?.title}</div>
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
                  loading='lazy'
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
