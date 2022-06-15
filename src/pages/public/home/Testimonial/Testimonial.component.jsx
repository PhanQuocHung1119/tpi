import React, { useMemo, useRef } from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.scss';
import { ClientComment } from './ClientComment';
import { useObserverItem } from 'components/hook/useObserverItem';

import avatar_1 from '@assets/client-comment/avatar-1.png';
import avatar_2 from '@assets/client-comment/avatar-2.png';
import avatar_3 from '@assets/client-comment/avatar-3.png';

const clientComment = [
  { name: 'Serhiy Hipskyy', title: 'CEO Universal', avatar: avatar_1 },
  { name: 'Justus Menke', title: 'CEO Eronaman', avatar: avatar_2 },
  { name: 'Britain Eriksen', title: 'CEO Universal', avatar: avatar_3 },
  { name: 'Serhiy Hipskyy', title: 'CEO Universal', avatar: avatar_1 },
  { name: 'Serhiy Hipskyy', title: 'CEO Universal', avatar: avatar_2 },
  { name: 'Justus Menke', title: 'CEO Eronaman', avatar: avatar_3 },
  { name: 'Britain Eriksen', title: 'CEO Universal', avatar: avatar_1 },
  { name: 'Serhiy Hipskyy', title: 'CEO Universal', avatar: avatar_2 },
];
const Testimonial = () => {
  const refSlider = useRef(null);

  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      dotsClass: styles['setting-dots'],
      variableWidth: true,
      dots: false,
      arrows: false,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      speed: 500,
      slidesToShow: 1,
      touchThreshold: 100,
      slidesToScroll: 1,
      adaptiveHeight: true,
      infinite: false,
      cssEase: 'linear',
    }),
    []
  );

  useObserverItem(refSlider, styles);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Testimonial</div>
        <div className={styles['desc']}>
          Hear what our previous clients had to say about our services!
        </div>
        <div className={styles['slider-wrapper']} ref={refSlider}>
          <Slider {...settings}>
            {Array.isArray(clientComment) &&
              clientComment?.map((item, index) => {
                return (
                  <ClientComment
                    name={item.name}
                    title={item.title}
                    avatar={item.avatar}
                    key={index}
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default React.memo(Testimonial);
