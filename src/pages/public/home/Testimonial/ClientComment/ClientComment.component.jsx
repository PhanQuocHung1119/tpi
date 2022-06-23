import React from 'react';
import styles from './ClientComment.module.scss';
import Image from 'next/image';
import client_comment_icon from '@assets/client-comment/client-comment-icon.png';
import { StarIcon } from '../StarIcon';

const ClientComment = ({ name, title, avatar, comment }) => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['icon-top']}>
          <Image
            src={client_comment_icon}
            alt=''
            width={18}
            height={18}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['icon-star']}>
          <StarIcon />
        </div>
        <div className={styles['desc']}>{comment}</div>
        <div className={styles['client-wrapper']}>
          <div className={styles['client-avatar']}>
            <Image
              src={avatar}
              alt=''
              width={36}
              height={36}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['client']}>
            <div className={styles['client__name']}>{name}</div>
            <div className={styles['client__title']}>{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(ClientComment);
