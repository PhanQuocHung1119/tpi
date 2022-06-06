import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { VideoTop } from 'components/own/video-top';
import React from 'react';
import { FoodIrradiationSystem } from './food-irradiation-system';
import styles from './FoodIrradiation.module.scss';
import { LogisticsAndDistribution } from './logistics-and-distribution';
import { MethodIrradiation } from './method-irradiation';
import { ProductOfIrradiation } from './products-irradiation';
const path = [
  { path: '#', title: 'Lĩnh vực tiên phong' },
  { path: '#', title: 'Chiếu xạ' },
];

const FoodIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <VideoTop />
        <FoodIrradiationSystem />
        <ProductOfIrradiation />
        <MethodIrradiation />
        <LogisticsAndDistribution />
        <NewsBlock />
      </div>
    </>
  );
};
export default FoodIrradiation;
