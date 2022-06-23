import React, { useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Question.module.scss';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { question } from '@constants/language-option';
import arrow_right from '@assets/news/right-arrow-green.png';

const Question = () => {
  const refFirstElmnt = useRef();
  const refLang = useRef();

  const action = useCallback((e) => {
    let elmnt = e.currentTarget;
    let arrElmnt = document.getElementsByClassName(styles['title']);
    [...arrElmnt].forEach((item) => {
      if (!item.contains(e.currentTarget)) {
        let itemLast = item.lastElementChild.classList;
        let itemNext = item.nextElementSibling.classList;
        if (itemLast.contains(styles['active']))
          itemLast.remove(styles['active']);
        if (itemNext.contains(styles['active']))
          itemNext.remove(styles['active']);
      }
    });

    elmnt.lastElementChild.classList.toggle(styles['active']);
    elmnt.nextElementSibling.classList.toggle(styles['active']);
  }, []);

  useChooseLanguage(question, refLang);

  useEffect(() => {
    refFirstElmnt.current?.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refFirstElmnt.current, refLang.current]);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['question-left']}>
          <div className={styles['question-left__title']}>
            {refLang.current?.title}
          </div>
          <div className={styles['question-left__desc']}>
            {refLang.current?.desc}
          </div>
          <div className={styles['question-left__load-more-btn']}>
            <div className={styles['load-more-btn__title']}>
              {refLang.current?.button}
            </div>
            <div className={styles['load-more-btn__icon']}>
              <Image
                src={arrow_right}
                alt=''
                width={12}
                height={9}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className={styles['question-right']}>
          {refLang.current?.subFAQ.map((item, index) =>
            index === 0 ? (
              <React.Fragment key={index}>
                <div className={styles['question-right__sub']}>
                  <div
                    className={styles['title']}
                    onClick={(e) => action(e)}
                    ref={refFirstElmnt}
                  >
                    {item.title}
                    <div className={styles['icon-open']}></div>
                  </div>
                  <div className={styles['desc']}>{item.desc}</div>
                </div>
                <div className={styles['bar']}></div>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                <div className={styles['question-right__sub']}>
                  <div className={styles['title']} onClick={(e) => action(e)}>
                    {item.title}
                    <div className={styles['icon-open']}></div>
                  </div>
                  <div className={styles['desc']}>{item.desc}</div>
                </div>
                <div className={styles['bar']}></div>
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </>
  );
};
export default React.memo(Question);
