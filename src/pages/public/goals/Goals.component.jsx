import React, { useRef } from 'react';
import styles from './Goals.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { GoalsBanner } from './goals-banner';
import { GoalsMain } from './goals-main';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';
import { goalsLogisticsAndSocial } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';

const Goals = () => {
  const refLang = useRef(null);
  useChooseLanguage(goalsLogisticsAndSocial, refLang);

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.goals} />
        <GoalsBanner />
        <GoalsMain />
        <LogisticsAndSocial logisticsAndSocial={refLang.current?.sub} />
         
      </div>
    </>
  );
};
export default React.memo(Goals);
