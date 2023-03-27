import React, { useMemo, useRef } from 'react';
import styles from './TopNewsCarousel.module.scss';
import Slider from 'react-slick';
import { SubTopNewsCarousel } from './sub-to-news-carousel';
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

function ArrowLef(props) {
  const { currentSlide, onClick } = props;
  return (
    <div
      className={
        styles[`slider-arrow__left${currentSlide === 0 ? '--disabled' : ''}`]
      }
      onClick={onClick}
    ></div>
  );
}

function ArrowRight(props) {
  const { currentSlide, slideCount, onClick } = props;
  return (
    <div
      className={
        styles[
          `slider-arrow__right${
            currentSlide > slideCount - 2 ? '--disabled' : ''
          }`
        ]
      }
      onClick={onClick}
    ></div>
  );
}

const TopNewsCarousel = ({ news }) => {
  const refSlider = useRef(null);

  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      dotsClass: styles['setting-dots'],
      variableWidth: true,
      dots: true,
      arrows: true,
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
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLef />,
    }),
    []
  );

  useObserverItem(refSlider, styles);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['slider-wrapper']} ref={refSlider}>
          <Slider {...settings}>
            {Array.isArray(news) &&
              news.map((item, index) => {
                return item?.fields?.hightLight ? (
                  <SubTopNewsCarousel key={index} news={item} />
                ) : (
                  ''
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default React.memo(TopNewsCarousel);
