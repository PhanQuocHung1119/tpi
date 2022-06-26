import React from 'react';
import styles from './QuestionAndAnswer.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { QuestionAndAnswerBanner } from './question-and-answer-banner';
import { QuestionContent } from './question-content';
import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';

const QuestionAndAnswer = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.questionAndAnswer} />
        <QuestionAndAnswerBanner />
        <QuestionContent />
        <NewsBlock />
      </div>
    </>
  );
};
export default React.memo(QuestionAndAnswer);
