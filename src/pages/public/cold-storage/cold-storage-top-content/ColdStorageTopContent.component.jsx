import React, { useRef } from 'react';
import styles from './ColdStorageTopContent.module.scss';
import { PioneeringTitle } from 'components/own/pioneering-title';
import { NumberAndDesc } from 'components/own/number-and-desc';
import { useObserverItem } from 'components/hook/useObserverItem';

const desc1 =
  'Không tốn chi phí xây dựng, vận hành, quản lý kho, tiết kiệm chi phí đầu tư';
const desc2 = 'Chủ động trong việc xuất nhập hàng xuyên suốt (24/7).';
const desc3 =
  'Chủ động trong việc chiếu xạ hàng hóa đang lưu tại kho mà không tốn thêm phí vận chuyển phát sinh.';
const ColdStorageTopContent = () => {
  const refContent = useRef();
  useObserverItem(refContent, styles);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <PioneeringTitle number={2} title='Kho lạnh lưu trữ' />
        </div>
        <div className={styles['desc-wrapper']}>
          <div className={styles['desc-wrapper__title']}>Kho lạnh lưu trữ</div>
          <div
            className={styles['desc-wrapper__desc']}
          >{`Hệ thống kho lạnh với sức chứa đạt khoảng 10.000 tấn hàng hóa.
Dịch vụ kho lạnh Toàn Phát mang lại nhiều giá trị cho các khách hàng:`}</div>
        </div>
        <div className={styles['sub-content']} ref={refContent}>
          <NumberAndDesc number={1} desc={desc1} />
          <NumberAndDesc number={2} desc={desc2} />
          <NumberAndDesc number={3} desc={desc3} />
        </div>
      </div>
    </>
  );
};
export default React.memo(ColdStorageTopContent);
