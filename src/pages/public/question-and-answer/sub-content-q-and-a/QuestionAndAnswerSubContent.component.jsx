import React from 'react';
import styles from './QuestionAndAnswerSubContent.module.scss';

const QuestionAndAnswerSubContent = ({ number, title, desc }) => {
  return (
    <>
      <div className={styles['container']}>
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
