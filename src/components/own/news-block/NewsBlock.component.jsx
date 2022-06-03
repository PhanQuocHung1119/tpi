import React from 'react';
import styles from './NewsBlock.module.scss';
import { SubNewsBlock } from './sub-news-block';
import Image from 'next/image';
import arrow_left from '@assets/icons/arrow-left.png';
import arrow_right from '@assets/icons/arrow-right.png';

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
];
const NewsBlock = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Tin tức mới nhất</div>
        <div className={styles['content-wrapper']}>
          <div className={styles['arrow-left']}>
            <Image
              src={arrow_left}
              alt=''
              width={12}
              height={19}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['content']}>
            {arrNews.map((item, index) => (
              <SubNewsBlock
                key={index}
                image={item.image}
                time={item.time}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
          <div className={styles['arrow-right']}>
            <Image
              src={arrow_right}
              alt=''
              width={12}
              height={19}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsBlock;
