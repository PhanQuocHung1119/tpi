import React, { useRef } from 'react';
import styles from './SixWord.module.scss';
import { SubSixWord } from './sub-six-word';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { sixWord } from '@constants/language-option';
import light from '@assets/best-services/Light.png';
import pencil from '@assets/best-services/pencil.png';
import Arrow_top from '@assets/best-services/Arrow-top.png';

const action = [
  { icon: light, number: 1 },
  { icon: pencil, number: 2 },
  { icon: Arrow_top, number: 3 },
  { icon: Arrow_top, number: 4 },
  { icon: Arrow_top, number: 5 },
  { icon: Arrow_top, number: 6 },
];

const SixWord = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refTitle = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(sixWord, refTitle);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refTitle.current?.title}</div>
        <div className={styles['content']} ref={refContent}>
          {refTitle.current?.sub.map((item, _i) => (
            <SubSixWord
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
export default React.memo(SixWord);
