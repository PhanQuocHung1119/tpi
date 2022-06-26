import React, { useMemo, useRef } from 'react';
import Slider from 'react-slick';
import styles from './NewsBlock.module.scss';
import { SubNewsBlock } from './sub-news-block';
import { useObserverItem } from 'components/hook/useObserverItem';
import { newsBlock } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

import news1 from '@assets/about-us/News-block-1.png';
import news2 from '@assets/about-us/News-block-2.png';
import news3 from '@assets/about-us/News-block-3.png';

const newsImages = [
  {
    id: 1,
    image: news1,
  },
  {
    id: 2,
    image: news2,
  },
  {
    id: 3,
    image: news3,
  },
  {
    id: 4,
    image: news1,
  },
  {
    id: 5,
    image: news3,
  },
  {
    id: 6,
    image: news2,
  },
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
            currentSlide > slideCount - 4 ? '--disabled' : ''
          }`
        ]
      }
      onClick={onClick}
    ></div>
  );
}

const NewsBlock = () => {
  const refSliderWrapper = useRef(null);
  const refLang = useRef(null);

  useObserverItem(refSliderWrapper, styles);
  useChooseLanguage(newsBlock, refLang);

  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      variableWidth: true,
      dots: false,
      arrows: true,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      touchThreshold: 20,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyLoad: 'progressive',
      cssEase: 'ease-out',
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLef />,
    }),
    []
  );

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Tin tức mới nhất</div>
        <div className={styles['content-wrapper']}>
          <div className={styles['slider-wrapper']} ref={refSliderWrapper}>
            <Slider {...settings}>
              {Array.isArray(refLang.current?.sub) &&
                refLang.current?.sub?.map((item, index) => {
                  return (
                    <SubNewsBlock
                      key={index}
                      image={newsImages[index].image}
                      time={item.time}
                      title={item.title}
                      desc={item.desc}
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(NewsBlock);
