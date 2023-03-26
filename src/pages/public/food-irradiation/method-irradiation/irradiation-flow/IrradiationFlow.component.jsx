import React, { useRef } from 'react';
import styles from './IrradiationFlow.module.scss';
import { SubIrradiationFlow } from './sub-irradiation-flow';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { irradiationFlow } from '@constants/language-option';
import arrow from '@assets/food-irradiation/arrow.png';

const action = [
  { icon: arrow, number: 1 },
  { icon: arrow, number: 2 },
  { icon: arrow, number: 3 },
  { icon: arrow, number: 4 },
  { icon: arrow, number: 5 },
  { icon: arrow, number: 6 },
];

const IrradiationFlow = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refTitle = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(irradiationFlow, refTitle);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refTitle.current?.title}</div>
        <div className={styles['content']} ref={refContent}>
          {refTitle.current?.sub.map((item, _i) => (
            <SubIrradiationFlow
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
export default React.memo(IrradiationFlow);
