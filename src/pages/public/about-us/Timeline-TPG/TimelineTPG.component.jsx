import React, { useRef } from 'react';
import styles from './TimelineTPG.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import { introduce } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import timeline_img from '@assets/about-us/TPG_timeline.png';

import Image from 'next/image';
const TimelineTitle = 'Lịch sử phát triển TOAN PHAT GROUP';

const TimelineTPG = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refArrLanguage = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(introduce, refArrLanguage);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['introduce-img']}>
          <Image
            src={timeline_img}
            alt=''
            width={1252}
            height={700}
            layout='responsive'
            objectFit='contain'
            quality={100}
            priority
          />
        </div>
        <div className={styles['content']} ref={refContent}>
          <div className={styles['content__title']}>{TimelineTitle}</div>
        </div>
      </div>
    </>
  );
};
export default React.memo(TimelineTPG);
