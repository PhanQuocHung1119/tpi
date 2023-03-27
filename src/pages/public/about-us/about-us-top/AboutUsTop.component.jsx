import React, { useRef } from 'react';
import styles from './AboutUsTop.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import about_us_img from '@assets/about-us/About-Us-Image.png';

const title = `Giới thiệu về TOAN PHAT GROUP (TPG)`;
const desc = `Năm 2017, bắt nguồn từ mong muốn chung tay cùng các doanh nghiệp nâng tầm thương hiệu và giá trị Nông - Thủy sản Việt, Toàn Phát Group (TPG) đã được xây dựng và phát triển. Để đặt nền móng cho sự khởi đầu, Dịch vụ Chiếu xạ (Công ty TNHH Chiếu Xạ Toàn Phát) là bước triển khai đầu tiên trong kế hoạch của TPG, thông qua đó đồng hành hỗ trợ các doanh nghiệp xuất khẩu Nông - Thủy sản giảm đi những áp lực về chi phí, nghiên cứu ứng dụng công nghệ để chủ động hơn trong lĩnh vực chiếu xạ và có thêm nhiều lợi thế khi xuất khẩu thực phẩm, hàng hóa ra quốc tế.

Với tầm nhìn xa hơn để con đường đưa Nông - Thủy sản Việt Nam có mặt trên thị trường thế giới được thuận lợi hơn nữa, năm 2023 TPG đã mở rộng lĩnh vực phát triển, xây dựng và đưa vào vận hành Kho Lạnh Toàn Phát (Công ty TNHH Toàn Phát Kho Vận) với khả năng lưu trữ tối đa lên đến 12.000 tấn. Trong chiến lược phát triển dài hạn, TPG hướng đến trở thành Trung tâm Logistic (LOGISTIC HUB) tại khu vực Đồng Bằng Sông Cửu Long cung cấp đầy đủ 03 dịch vụ: Chiếu xạ - Lưu trữ - Vận chuyển.
`;

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
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(AboutUsTop);
