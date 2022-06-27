import React, { useRef } from 'react';
import styles from './QuestionAndAnswerBanner.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import banner from '@assets/question-and-answer/Q&A.png';

const QuestionAndAnswerBanner = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <Image
          src={banner}
          alt=''
          width={1440}
          height={700}
          layout='responsive'
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
    </>
  );
};
export default QuestionAndAnswerBanner;
