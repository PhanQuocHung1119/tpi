import React, { useRef } from 'react';
import styles from './AboutUs.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { AboutUsTop } from './about-us-top';
import { AboutUsTopAdd } from './about-us-top-add';
import { AboutUsTeamMember } from './about-us-team-member';
import { CoreValue } from './core-value';
// import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';
import { TimelineTPG } from './Timeline-TPG';
import { SixWord } from './six-word';
import { FutureGoal } from './future-goal';
import { HumanResource } from './HumanResource';

const AboutUs = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb?.aboutUs} />
        <AboutUsTop />
        <TimelineTPG />
        <AboutUsTopAdd />
        <CoreValue />
        <SixWord />
        <FutureGoal />
        <HumanResource />
        <AboutUsTeamMember />
      </div>
    </>
  );
};
export default React.memo(AboutUs);
