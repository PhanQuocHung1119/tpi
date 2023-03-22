import React from 'react';
import styles from './MarketDetail.module.scss';
import Image from 'next/image';
import { get } from 'lodash';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Breadcrumb } from 'components/own/breadcrumb';
import { breadcrumb } from '@constants/language-option';

const MarketDetail = ({ news }) => {
  const { title, image, desc, time, author, avatar, slug } = news.fields;

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
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.market} />

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
            />
          </div>
          <div className={styles['desc']}>
            {documentToReactComponents(desc)}
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(MarketDetail);
