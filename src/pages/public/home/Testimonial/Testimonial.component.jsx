import React, { useMemo, useRef } from 'react';
import Slider from 'react-slick';
import styles from './Testimonial.module.scss';
import { ClientComment } from './ClientComment';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { testimonial } from '@constants/language-option';
import avatar_1 from '@assets/client-comment/avatar-1.png';
import avatar_2 from '@assets/client-comment/avatar-2.png';
import avatar_3 from '@assets/client-comment/avatar-3.png';

const clientAvatar = [
  { avatar: avatar_1 },
  { avatar: avatar_2 },
  { avatar: avatar_3 },
  { avatar: avatar_1 },
  { avatar: avatar_2 },
  { avatar: avatar_3 },
  { avatar: avatar_1 },
  { avatar: avatar_2 },
];

const Testimonial = () => {
  const refSlider = useRef(null);
  const refContent = useRef(null);

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
      touchThreshold: 50,
      slidesToScroll: 1,
      adaptiveHeight: true,
      infinite: false,
      cssEase: 'linear',
    }),
    []
  );

  useObserverItem(refSlider, styles);
  useChooseLanguage(testimonial, refContent);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>{refContent.current?.title}</div>
        <div className={styles['desc']}>
          <div className={styles['title']}>{refContent.current?.desc}</div>
        </div>
        <div className={styles['slider-wrapper']} ref={refSlider}>
          <Slider {...settings}>
            {Array.isArray(refContent.current?.comments) &&
              refContent.current?.comments?.map((item, index) => {
                return (
                  <ClientComment
                    key={index}
                    name={item.name}
                    title={item.title}
                    avatar={clientAvatar[index].avatar}
                    comment={item.comment}
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
