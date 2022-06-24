import React, { useRef } from 'react';
import styles from './SupportContact.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const SupportContact = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>Liên hệ</div>
        <div className={styles['desc']}>
          Thank you for getting in touch! Fill the form, have a great day!
        </div>
        <div className={styles['content-wrapper']}>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Your Name</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Your Email</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Phone Number</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Country</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Company Name</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Quan tâm dịch vụ</div>
            <div className={styles['sub-content__line']}></div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Message</div>
            <div className={styles['sub-content__line']}></div>
          </div>
        </div>
        <div className={styles['contact-button']}>Liên hệ</div>
      </div>
    </>
  );
};
export default SupportContact;
