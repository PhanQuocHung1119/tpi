import React, { useRef } from 'react';
import styles from './QuestionAndAnswerSubContent.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const QuestionAndAnswerSubContent = ({ number, title, desc }) => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>
          <div className={styles['title__number']}>
            {number}
            {`.`}&nbsp;
          </div>
          {title}
        </div>
        <div className={styles['desc']}>{desc}</div>
      </div>
    </>
  );
};
export default QuestionAndAnswerSubContent;
