import React, { useRef } from 'react';
import styles from './OurProject.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { ourProject } from '@constants/language-option';
import our_project_1 from '@assets/our-project/OurProject-1.png';
import our_project_2 from '@assets/our-project/OurProject-2.png';
import our_project_3 from '@assets/our-project/OurProject-3.png';
import our_project_4 from '@assets/our-project/OurProject-4.png';
import our_project_5 from '@assets/our-project/OurProject-5.png';
import our_project_6 from '@assets/our-project/OurProject-6.png';

const action = [
  { image: our_project_1 },
  { image: our_project_2 },
  { image: our_project_3 },
  { image: our_project_4 },
  { image: our_project_5 },
  { image: our_project_6 },
];

const OurProject = () => {
  const refContainer = useRef();
  const refContent = useRef();
  const refLang = useRef();

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);
  useChooseLanguage(ourProject, refLang);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['main-title']}>{refLang.current?.mainTitle}</div>
        <div className={styles['desc']}>{refLang.current?.desc}</div>
        <div className={styles['content']} ref={refContent}>
          {action.map((item, index) => (
            <div className={styles['content__image']} key={index}>
              <Image
                src={item.image}
                alt=''
                width={471}
                height={350}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(OurProject);
