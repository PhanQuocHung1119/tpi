import React, { useRef, useCallback } from 'react';
import styles from './TopNews.module.scss';
import { get } from 'lodash';
import Image from 'next/image';
import { RoutePages } from '@constants/router';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useRouter } from 'next/router';


const TopNews = ({ news }) => {
  const { title, image, desc, slug, time, author, avatar, hightLight } = news.fields;
  const refContent = useRef(null);
  useObserverItem(refContent, styles);
  const router = useRouter();

  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );

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
        <div
          className={styles['main-image']}
          onClick={() => redirectToPage(RoutePages.MARKET + `/${slug}`)}
        >
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
        <div className={styles['content-wrapper']}>
          <div
            className={styles['title']}
            onClick={() => redirectToPage(RoutePages.MARKET + `/${slug}`)}
          >
            {title}
          </div>
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
export default React.memo(TopNews);
