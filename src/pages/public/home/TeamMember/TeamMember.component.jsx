import React, { useRef, useMemo } from 'react';
import styles from './TeamMember.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { teamMember } from '@constants/language-option';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

import member1 from '@assets/team-member/member-1.png';
import member2 from '@assets/team-member/member-2.png';
import member3 from '@assets/team-member/member-3.png';

const members = [
  {
    image: member1,
  },
  {
    image: member2,
  },
  {
    image: member3,
  },
  {
    image: member1,
  },
  {
    image: member2,
  },
  {
    image: member3,
  },
];

const TeamMember = () => {
  const refContent = useRef();
  const refContainer = useRef();

  useObserverItem(refContainer, styles);
  useChooseLanguage(teamMember, refContent);
  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      variableWidth: true,
      dots: false,
      arrows: false,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      touchThreshold: 50,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyLoad: 'progressive',
      cssEase: 'ease-out',
    }),
    []
  );

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-wrapper']}>
          <div className={styles['title']}>{refContent.current?.title}</div>
          <div className={styles['title-main']}>
            {refContent.current?.titleMain}
          </div>
          <div className={styles['desc']}>{refContent.current?.desc}</div>
        </div>
        <div className={styles['member-wrapper']}>
          <Slider {...settings}>
            {refContent.current?.sub.map((item, index) => (
              <div className={styles['member']} key={index}>
                <div className={styles['member__img']}>
                  <Image
                    src={members[index].image}
                    alt=''
                    width={384}
                    height={436}
                    layout='responsive'
                    objectFit='contain'
                    quality={100}
                    loading='lazy'
                  />
                </div>
                {/*<div className={styles['member__desc']}> //Bo chuc danh
                  <div className={styles['bar']}></div>
                  <div className={styles['desc']}>
                    {item.title}
                    <br />
                    {item.desc}
                  </div>
            </div>*/}
              </div>
            ))}
          </Slider>
          {/* {refContent.current?.sub.map((item, index) => (
            <div className={styles['member']} key={index}>
              <div className={styles['member__img']}>
                <Image
                  src={members[index].image}
                  alt=''
                  width={384}
                  height={436}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
              <div className={styles['member__desc']}>
                <div className={styles['bar']}></div>
                <div className={styles['desc']}>
                  {item.title}
                  <br />
                  {item.desc}
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};
export default React.memo(TeamMember);
