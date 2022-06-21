import React, { useMemo, useRef } from 'react';
import Slider from 'react-slick';
import styles from './NewsBlock.module.scss';
import { SubNewsBlock } from './sub-news-block';
import { useObserverItem } from 'components/hook/useObserverItem';

import news1 from '@assets/about-us/News-block-1.png';
import news2 from '@assets/about-us/News-block-2.png';
import news3 from '@assets/about-us/News-block-3.png';

const arrNews = [
  {
    id: 1,
    image: news1,
    time: `08/02/2022`,
    title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
    desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
  },
  {
    id: 2,
    image: news2,
    time: `23/05/2022`,
    title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
    desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
  },
  {
    id: 3,
    image: news3,
    time: `08/03/2022`,
    title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
    desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
  },
  {
    id: 4,
    image: news1,
    time: `08/02/2022`,
    title: `Doanh nhân Vương Hiếu, CEO Công ty TNHH Chiếu xạ Toàn Phát (TPI): Càng khó, càng muốn chinh phục`,
    desc: `CEO Vương Hiếu nói, trong quá trình khởi nghiệp, anh may mắn vì được người thân và các đối tác ủng hộ...`,
  },
  {
    id: 5,
    image: news3,
    time: `08/03/2022`,
    title: `Happy Woman’s Day - NHỮNG BÔNG HOA CỦA ĐẠI GIA ĐÌNH TPI`,
    desc: `Cảm ơn "các nàng" đã luôn đồng hành của TPI trong suốt hành trình qua!`,
  },
  {
    id: 6,
    image: news2,
    time: `23/05/2022`,
    title: `Lễ khởi công kho lạnh Toàn Phát - kho vận`,
    desc: `The waitlist is an invaluable marketing tool when used appropriately. Here's how to `,
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
  useObserverItem(refSliderWrapper, styles);

  const settings = useMemo(
    () => ({
      className: styles['setting-slider'],
      dotsClass: styles['setting-dots'],
      variableWidth: true,
      dots: false,
      arrows: true,
      swipeToSlide: true,
      touchMove: true,
      swipe: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      touchThreshold: 10,
      slidesToScroll: 1,
      adaptiveHeight: true,
      lazyLoad: 'ondemand',
      cssEase: 'linear',
      nextArrow: <ArrowRight />,
      prevArrow: <ArrowLef />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            lazyLoad: 'progressive',
            slidesToShow: 1,
          },
        },
      ],
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
              {Array.isArray(arrNews) &&
                arrNews?.map((item, index) => {
                  return (
                    <SubNewsBlock
                      key={index}
                      image={item.image}
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
export default NewsBlock;
