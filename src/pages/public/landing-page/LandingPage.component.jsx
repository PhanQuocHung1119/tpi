import React, { useCallback } from 'react';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RoutePages } from '@constants/router';
import ToanPhat from '@assets/header/ToanPhat-Mobile-Icon.svg';
// import YouTube from 'react-youtube';

const videoInfo = {
  id: 'toan-phat-landing-page',
  video: 'https://www.youtube.com/watch?v=nNgW2NUjv6s',
};

const urlVideoDrive =
  'https://ik.imagekit.io/damnedbrain/introweb.mp4?updatedAt=1679900504660';

const LandingPage = () => {
  const router = useRouter();

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

  const chooseLanguageAndRedirect = useCallback(
    (_language) => {
      router.push(RoutePages.HOME_PAGE, RoutePages.HOME_PAGE, {
        locale: _language,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.locale, RoutePages]
  );

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  return (
    <>
      <div className={styles['container']}>
        <video autoPlay muted loop className={styles['video']}>
          <source src={urlVideoDrive} type='video/mp4' />
        </video>

        {/* <iframe       
          id={videoInfo.id}
          className={styles['video']}
          type='text/html'
          allow='autoplay'
          src='https://www.youtube.com/embed/nNgW2NUjv6s?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&enablejsapi=1&disablekb=1'
        ></iframe> */}
        {/* 
        <YouTube
          videoId='nNgW2NUjv6s'
          iframeClassName={styles['video']}
          id={videoInfo.id}
          opts={opts}
          onReady={_onReady}
        /> */}
        <div className={styles['icon-toan-phat']}>
          <Image
            src={ToanPhat}
            alt=''
            width={209}
            height={172}
            layout='responsive'
            objectFit='contain'
            quality={100}
            loading='lazy'
          />
        </div>
        <div className={styles['btn-wrapper']}>
          <div
            className={styles['btn-wrapper__btn']}
            onClick={() => chooseLanguageAndRedirect('vi')}
          >{`ENTER`}</div>
          {/*<div
            className={styles['btn-wrapper__btn']}
            onClick={() => chooseLanguageAndRedirect('en-US')}
      >{`ENG`}</div>*/}
        </div>
      </div>
    </>
  );
};
export default LandingPage;
