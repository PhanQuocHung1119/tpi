import React, { useRef } from 'react';
import styles from './AboutUs.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { AboutUsTop } from './about-us-top';
import { AboutUsTopAdd } from './about-us-top-add';
import { AboutUsTeamMember } from './about-us-team-member';
import { MissionAndVaule } from './mission-and-vaule';
import { NewsBlock } from 'components/own/news-block';
import { breadcrumb } from '@constants/language-option';
import { TimelineTPG } from './Timeline-TPG';

const AboutUs = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb?.aboutUs} />
        <AboutUsTop />
        <TimelineTPG />
        <AboutUsTopAdd />
        <MissionAndVaule />
        <AboutUsTeamMember />
      </div>
    </>
  );
};
export default React.memo(AboutUs);
