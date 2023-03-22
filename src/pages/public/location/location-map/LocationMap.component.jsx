import React, { useRef } from 'react';
import styles from './LocationMap.module.scss';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { NumberAndDescMap } from 'components/own/number-and-desc-map';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { LocationMapContent } from '@constants/language-option';

const videoLocationInfo =
  'https://ik.imagekit.io/damnedbrain/location_map_video.mp4?updatedAt=1679480383008';

const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
      disablekb: 1,
      mute: 1,
      loop: 1,
      playsinline: 1,
    },
};

const LocationMap = () => {
  const refContent = useRef(null);
  const refLang = useRef();
  useObserverItem(refContent, styles);
  useChooseLanguage(LocationMapContent, refLang);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['desc-wrapper']}>
          <div className={styles['desc-wrapper__title']}>
            {refLang.current?.title}
          </div>
          <div className={styles['desc-wrapper__desc']}>
            {refLang.current?.desc}
          </div>
        </div>
        <div className={styles['video']}>
          <video autoPlay muted loop className={styles['video']}>
            <source src={videoLocationInfo} type='video/mp4' />
          </video>
        </div>
        <div className={styles['sub-content']} ref={refContent}>
          {refLang.current?.sub.map((item, index) => (
            <NumberAndDescMap key={index} number={index + 1} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(LocationMap);
