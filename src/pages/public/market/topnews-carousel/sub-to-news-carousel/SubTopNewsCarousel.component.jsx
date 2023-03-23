import React, { useRef, useCallback } from 'react';
import styles from './SubTopNewsCarousel.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { get } from 'lodash';
import { RoutePages } from '@constants/router';
import { useRouter } from 'next/router';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const SubTopNewsCarousel = ({ news }) => {
  const { title, image, desc, slug, time, author, avatar } = news?.fields;
  const router = useRouter();
  const refContainer = useRef();

  useObserverItem(refContainer, styles);

  const redirectToPage = useCallback(
    (_link) => {
      router.push(_link);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [router]
  );

  let _avatar = get(avatar, ['fields', 'file', 'url']);
  let _imageURL = get(image, ['fields', 'file', 'url']);
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

  const activeImage = (e) => {
    let threshold = 3;
    let distance = 0;

    const onMouseMove = () => {
      distance++;
    };
    const onMouseUp = () => {
      if (distance <= threshold) redirectToPage(RoutePages.MARKET + `/${slug}`);
    };
    e.currentTarget.addEventListener('mousemove', onMouseMove);
    e.currentTarget.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <>
      <div
        className={styles['container']}
        ref={refContainer}
        onMo
        onMouseDown={(e) => activeImage(e)}
      >
        <div className={styles['main-image']}>
          <Image
            src={`https:${_imageURL}`}
            alt=''
            width={_imageWidth ? _imageWidth : 383}
            height={_imageHeight ? _imageHeight : 200}
            layout='responsive'
            objectFit='cover'
            quality={100}
          />
        </div>
        <div className={styles['client-wrapper']}>
          <div className={styles['client']}>
            <div className={styles['client__title']}>{title}</div>
            <div className={styles['client__time']}>{convertTime(time)}</div>
            <div className={styles['client__desc']}>
              {documentToReactComponents(desc)}
            </div>
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
      </div>
    </>
  );
};
export default React.memo(SubTopNewsCarousel);
