import React, { useRef } from 'react';
import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { VideoTop } from 'components/own/video-top';
import { FoodIrradiationSystem } from './food-irradiation-system';
import styles from './FoodIrradiation.module.scss';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';
import { MethodIrradiation } from './method-irradiation';
import { ProductOfIrradiation } from './products-irradiation';
import { logisticsAndSocial } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

const path = [
  { path: '#', title: 'Lĩnh vực tiên phong' },
  { path: '#', title: 'Chiếu xạ' },
];

const FoodIrradiation = () => {
  const refLang = useRef();
  useChooseLanguage(logisticsAndSocial, refLang);

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <VideoTop />
        <FoodIrradiationSystem />
        <ProductOfIrradiation />
        <MethodIrradiation />
        <LogisticsAndSocial logisticsAndSocial={refLang.current?.sub} />
        <NewsBlock />
      </div>
    </>
  );
};
export default React.memo(FoodIrradiation);
