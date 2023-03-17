import React, { useCallback } from 'react';
import styles from './LandingPage.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RoutePages } from '@constants/router';
import ToanPhat from '@assets/header/ToanPhat-Icon.svg';

const urlVideo = 'https://theagency.vn/wp-content/uploads/2017/07/home.mp4';
const urlVideoDrive =
  'https://ik.imagekit.io/jpppzmlzpq/home.mp4?updatedAt=1679019595619';

const LandingPage = () => {
  const router = useRouter();

  const chooseLanguageAndRedirect = useCallback(
    (_language) => {
      router.push(RoutePages.HOME_PAGE, RoutePages.HOME_PAGE, {
        locale: _language,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.locale, RoutePages]
  );

  return (
    <>
      <div className={styles['container']}>
        <video autoPlay muted loop className={styles['video']}>
          <source src={urlVideo} type='video/mp4' />
        </video>
        <div className={styles['icon-toan-phat']}>
          <Image
            src={ToanPhat}
            alt=''
            width={209}
            height={172}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
        <div className={styles['btn-wrapper']}>
          <div
            className={styles['btn-wrapper__btn']}
            onClick={() => chooseLanguageAndRedirect('vi')}
          >{`VN`}</div>
          <div
            className={styles['btn-wrapper__btn']}
            onClick={() => chooseLanguageAndRedirect('en-US')}
          >{`ENG`}</div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
