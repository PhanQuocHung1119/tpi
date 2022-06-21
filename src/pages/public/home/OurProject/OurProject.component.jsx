import React, { useRef } from 'react';
import styles from './OurProject.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import our_project_1 from '@assets/our-project/OurProject-1.png';
import our_project_2 from '@assets/our-project/OurProject-2.png';
import our_project_3 from '@assets/our-project/OurProject-3.png';
import our_project_4 from '@assets/our-project/OurProject-4.png';
import our_project_5 from '@assets/our-project/OurProject-5.png';
import our_project_6 from '@assets/our-project/OurProject-6.png';
const ourProject = [
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

  useObserverItem(refContainer, styles);
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>Our project</div>
        <div className={styles['main-title']}>Latest project</div>
        <div className={styles['desc']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
          consequat egestas dictum posuere pellentesque fermentum.
        </div>
        <div className={styles['content']} ref={refContent}>
          {ourProject.map((item, index) => (
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
