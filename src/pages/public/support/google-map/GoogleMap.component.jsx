import React from 'react';
import styles from './GoogleMap.module.scss';

const GoogleMap = () => {
  return (
    <>
      <div className={styles['container']}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.528817455469!2d106.45170507222925!3d10.68601423610957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310acda26bbb9b57%3A0x34480ab0b0cc801!2zQ8OUTkcgVFkgVE5ISCBDSEnhur5VIFjhuqAgVE_DgE4gUEjDgVQ!5e0!3m2!1svi!2s!4v1656014182754!5m2!1svi!2s'
          width='1440'
          height='400'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  );
};
export default GoogleMap;
