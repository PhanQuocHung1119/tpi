import React, { useRef } from 'react';
import styles from './SixWord.module.scss';
import { SubSixWord } from './sub-six-word';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { sixWord } from '@constants/language-option';
import icon1 from '@assets/about-us/six-word-icons/icon1.png';
import icon2 from '@assets/about-us/six-word-icons/icon2.png';
import icon3 from '@assets/about-us/six-word-icons/icon3.png';
import icon4 from '@assets/about-us/six-word-icons/icon4.png';
import icon5 from '@assets/about-us/six-word-icons/icon5.png';
import icon6 from '@assets/about-us/six-word-icons/icon6.png';
import Arrow_top from '@assets/best-services/Arrow-top.png';

const action = [
  { icon: icon1, number: 1 },
  { icon: icon2, number: 2 },
  { icon: icon3, number: 3 },
  { icon: icon4, number: 4 },
  { icon: icon5, number: 5 },
  { icon: icon6, number: 6 },
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
