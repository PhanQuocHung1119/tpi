import React from 'react';
import styles from './VideoTop.module.scss';
import Image from 'next/image';
import video_top from '@assets/video-top/video-top.png';
const VideoTop = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['video-image']}>
          <Image
            src={video_top}
            alt=''
            width={974}
            height={547}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default VideoTop;
