import React, { useRef } from 'react';
import styles from './BestServices.module.scss';
import { SubBestServices } from './SubBestServices';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { bestServices } from '@constants/language-option';
import light from '@assets/best-services/Light.png';
import pencil from '@assets/best-services/pencil.png';
import Arrow_top from '@assets/best-services/Arrow-top.png';

const action = [
  { icon: light, number: 1 },
  { icon: pencil, number: 2 },
  { icon: Arrow_top, number: 3 },
];

const BestServices = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refTitle = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(bestServices, refTitle);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refTitle.current?.title}</div>
        <div className={styles['content']} ref={refContent}>
          {refTitle.current?.sub.map((item, _i) => (
            <SubBestServices
              key={_i}
              icon={action[_i].icon}
              number={action[_i].number}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(BestServices);
