import React from 'react';
import styles from './Question.module.scss';
import Image from 'next/image';
import arrow_right from '@assets/news/right-arrow-green.png';

const Question = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['question-left']}>
          <div className={styles['question-left__title']}>
            Any questions? We got you.
          </div>
          <div className={styles['question-left__desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            leo, id gravida eget gravida. Ultrices est sollicitudin risus
            molestie commodo netus nam.
          </div>
          <div className={styles['question-left__load-more-btn']}>
            <div className={styles['load-more-btn__title']}>More FAQs</div>
            <div className={styles['load-more-btn__icon']}>
              <Image
                src={arrow_right}
                alt=''
                width={12}
                height={9}
                layout='responsive'
                objectFit='contain'
                placeholder='blur'
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className={styles['question-right']}>
          <div className={styles['question-right__open']}>
            <div className={styles['open__title']}>
              Question goes here?
              <div className={styles['icon-open']}>-</div>
            </div>
            <div className={styles['open__desc']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
              leo, id gravida eget gravida. Ultrices est sollicitudin risus
              molestie commodo netus nam.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris ut leo, id gravida eget gravida. Ultrices
              est sollicitudin risus molestie commodo netus nam.
            </div>
          </div>
          <div className={styles['bar']}></div>
          <div className={styles['question-right__close']}>
            <div className={styles['close__title']}>Question goes here?</div>
            <div className={styles['icon-open']}>+</div>
          </div>
          <div className={styles['bar']}></div>
          <div className={styles['question-right__close']}>
            <div className={styles['close__title']}>Question goes here?</div>
            <div className={styles['icon-open']}>+</div>
          </div>
          <div className={styles['bar']}></div>
          <div className={styles['question-right__close']}>
            <div className={styles['close__title']}>Question goes here?</div>
            <div className={styles['icon-open']}>+</div>
          </div>
          <div className={styles['bar']}></div>
        </div>
      </div>
    </>
  );
};
export default React.memo(Question);
