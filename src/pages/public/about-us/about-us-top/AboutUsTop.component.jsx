import React, { useRef } from 'react';
import styles from './AboutUsTop.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import about_us_img from '@assets/about-us/About-Us-Image.png';

const title = `Giới thiệu về TPI`;
const desc = `Tên doanh nghiệp: CÔNG TY TNHH CHIẾU XẠ TOÀN PHÁT.
Tên giao dịch: TOAN PHAT IRRADIATION LIMITED COMPANY.
Tên viết tắt: TPI.
Mã số thuế: 1101846577.
Địa chỉ nhà máy: Lô A24-1, Đường Ngang 1, Khu Công Nghiệp Phú An Thạnh, Xã An Thạnh, Huyện Bến Lức, Tỉnh Long An.
Ngày cấp giấy phép: 27/03/2017.
Ngành nghề hoạt động chính: chiếu xạ khử trùng các loại nông lâm, thủy sản, các dụng cụ y tế; Chiếu xạ bảo quản các sản phẩm công nghiệp và các sản phẩm tiêu dùng khác.`;

const AboutUsTop = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-left']}>
          <NumberGeneralInfo title={title} desc={desc} />
        </div>
        <div className={styles['content-right']}>
          <div className={styles['icon-number']}>
            <Image
              src={about_us_img}
              alt=''
              width={580}
              height={513}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(AboutUsTop);
