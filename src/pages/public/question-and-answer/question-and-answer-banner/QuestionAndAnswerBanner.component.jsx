import React from 'react';
import styles from './QuestionAndAnswerBanner.module.scss';
import Image from 'next/image';
import banner from '@assets/question-and-answer/Q&A.png';

const QuestionAndAnswerBanner = () => {
  return (
    <>
      <div className={styles['container']}>
        <Image
          src={banner}
          alt=''
          width={1440}
          height={700}
          layout='responsive'
          objectFit='contain'
          quality={100}
        />
      </div>
    </>
  );
};
export default QuestionAndAnswerBanner;
