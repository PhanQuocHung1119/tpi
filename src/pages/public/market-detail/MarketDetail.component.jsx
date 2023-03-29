import React from 'react';
import styles from './MarketDetail.module.scss';
import Image from 'next/image';
import { get } from 'lodash';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Breadcrumb } from 'components/own/breadcrumb';
import { RoutePages } from '@constants/router';

const MarketDetail = ({ news }) => {
  if (!news?.fields) return;
  const { title, image, desc, time, author, avatar, slug } = news?.fields;

  let _image = get(image, ['fields', 'file', 'url']);
  let _avatar = get(avatar, ['fields', 'file', 'url']);

  let _imageWidth = get(image, ['fields', 'file', 'details', 'image', 'width']);
  let _imageHeight = get(image, [
    'fields',
    'file',
    'details',
    'image',
    'height',
  ]);
  let _imageAvatarrWidth = get(avatar, [
    'fields',
    'file',
    'details',
    'image',
    'width',
  ]);
  let _imageAvatarrHeight = get(avatar, [
    'fields',
    'file',
    'details',
    'image',
    'height',
  ]);

  const convertTime = (time) => {
    const event = new Date(time);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return event.toLocaleDateString('vi', options);
  };

  const marketDetailBreadcrumb = [
    {
      locale: 'vi',
      sub: [
        { path: RoutePages.MARKET, title: 'Thị trường' },
        { path: RoutePages.MARKET + `/${slug}`, title: title },
      ],
    },
    {
      locale: 'en-US',
      sub: [
        { path: RoutePages.MARKET, title: 'Market' },
        { path: RoutePages.MARKET + `/${slug}`, title: title },
      ],
    },
  ];

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={marketDetailBreadcrumb} />

        <div className={styles['content-wrapper']}>
          <div className={styles['title']}>{title}</div>
          <div className={styles['author']}>
            <div className={styles['author__avatar']}>
              <Image
                src={`https:${_avatar}`}
                alt=''
                width={_imageAvatarrWidth ? _imageAvatarrWidth : 50}
                height={_imageAvatarrHeight ? _imageAvatarrHeight : 50}
                layout='responsive'
                objectFit='contain'
                quality={100}
                loading='lazy'
              />
            </div>
            <div className={styles['author__name']}>{author}</div>
          </div>

          <div className={styles['main-image']}>
            <Image
              src={`https:${_image}`}
              alt=''
              width={_imageWidth ? _imageWidth : 383}
              height={_imageHeight ? _imageHeight : 200}
              layout='responsive'
              objectFit='contain'
              quality={100}
              loading='lazy'
            />
          </div>
          <div className={styles['time']}>{convertTime(time)}</div>

          <div className={styles['desc']}>
            {documentToReactComponents(desc)}
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(MarketDetail);
