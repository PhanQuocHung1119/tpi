import React, { useRef } from 'react';
import styles from './SupportContent.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';

const SupportContent = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>Hỗ trợ</div>
        <div className={styles['sub-content-wrapper']}>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Chiếu xạ</div>
            <div className={styles['sub-content__desc']}>
              {`Công ty TNHH Chiếu Xạ Toàn Phát
Địa chỉ: Lô A24-1, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.
MST: 1101846577.
Đăng ký dịch vụ: 
Email: 
SĐT:
`}
            </div>
          </div>
          <div className={styles['sub-content']}>
            <div className={styles['sub-content__title']}>Thuê kho lạnh</div>
            <div className={styles['sub-content__desc']}>
              {`Công ty TNHH Toàn Phát - Kho Vận
Địa chỉ: Lô A24-2, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.
MST: 1101966433. 
Đăng ký thuê kho:
Email:
SĐT:
`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SupportContent;
