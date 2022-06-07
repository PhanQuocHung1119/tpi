import React from 'react';
import styles from './QuestionAndAnswer.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { QuestionAndAnswerBanner } from './question-and-answer-banner';
import { QuestionContent } from './question-content';
import { NewsBlock } from 'components/own/news-block';
const path = [{ path: '#', title: 'Q&A' }];

const QuestionAndAnswer = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <QuestionAndAnswerBanner />
        <QuestionContent />
        <NewsBlock />
      </div>
    </>
  );
};
export default QuestionAndAnswer;
