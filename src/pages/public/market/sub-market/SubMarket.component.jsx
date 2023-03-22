import React, { useRef } from 'react';
import styles from './SubMarket.module.scss';
import { get } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { RoutePages } from '@constants/router';
import { useObserverItem } from 'components/hook/useObserverItem';

const SubMarket = ({ news }) => {
  const { title, image, desc, slug, time, author, avatar } = news.fields;
  const refContent = useRef(null);
  useObserverItem(refContent, styles);

  let _desc = get(desc, ['content', 0, 'content', 0, 'value']);
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

  return (
    <>
      <div className={styles['container']} ref={refContent}>
        <Link href={RoutePages.MARKET + `/${slug}`} passHref>
          <div className={styles['main-image']}>
            <Image
              src={`https:${_image}`}
              alt=''
              width={_imageWidth ? _imageWidth : 383}
              height={_imageHeight ? _imageHeight : 200}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </Link>
        <div className={styles['content-wrapper']}>
          <Link href={RoutePages.MARKET + `/${slug}`} passHref>
            <div className={styles['title']}>{title}</div>
          </Link>
          <div className={styles['time']}>{convertTime(time)}</div>
          <div className={styles['desc']}>{_desc}</div>
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
              />
            </div>
            <div className={styles['author__name']}>{author}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(SubMarket);
