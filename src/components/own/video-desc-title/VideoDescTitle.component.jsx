import React, { useRef } from 'react';
import styles from './VideoDescTitle.module.scss';
import Image from 'next/image';
import { useLoadVideo, createIframe } from 'components/hook/useLoadVideo';
import { useObserverItem } from 'components/hook/useObserverItem';

import play_icon from '@assets/icons/play-icon.png';
import toan_phat_icon from '@assets/header/ToanPhat-Mobile-Icon.svg';

/*const videoInfo = {
  id: 'toan-phat-1',
  video: 'https://www.youtube.com/watch?v=nNgW2NUjv6s',
};*/

const VideoDescTitle = ({ videoInfo, title, desc, videoID }) => {
  const refContainer = useRef();
  const refIconPlay = useRef();

  useLoadVideo();
  useObserverItem(refContainer, styles);
  useObserverItem(refIconPlay, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div
          className={styles['video-image-wrapper']}
          id={`image-${videoID}`}
          onClick={(e) => createIframe(e, videoID, videoInfo)}
        >
          <div className={styles['thumbnail']}>
            <div className={styles['thumbnail__icon-play']} ref={refIconPlay}>
              <Image
                src={play_icon}
                alt=''
                width={105}
                height={105}
                layout='responsive'
                objectFit='contain'
              />
            </div>
            <div className={styles['thumbnail__video-image']}>
              <Image
                src={toan_phat_icon}
                alt=''
                width={300}
                height={241}
                layout='responsive'
                objectFit='contain'
                quality={100}
              />
            </div>
          </div>
        </div>
        <div>
    
            <div class={styles['title']}>{title}</div>
            <div class={styles['videoDesc']}>{desc}</div>

        </div>
      </div>
    </>
  );
};
export default React.memo(VideoDescTitle);
