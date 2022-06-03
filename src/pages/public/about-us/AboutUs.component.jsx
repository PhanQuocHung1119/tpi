import React from 'react';
import styles from './AboutUs.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { AboutUsTop } from './about-us-top';
import { AboutUsTeamMember } from './about-us-team-member';
import { MissionAndVaule } from './mission-and-vaule';
import { NewsBlock } from 'components/own/news-block';

const AboutUs = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb />
        <AboutUsTop />
        <AboutUsTeamMember />
        <MissionAndVaule />
        <NewsBlock />
      </div>
    </>
  );
};
export default AboutUs;
