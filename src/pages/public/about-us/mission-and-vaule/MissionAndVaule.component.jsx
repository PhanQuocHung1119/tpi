import React, { useRef } from 'react';
import styles from './MissionAndVaule.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import mission from '@assets/about-us/Mission-and-value.png';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const title1 = `Tầm nhìn sứ mệnh`;
const title2 = `Giá trị cốt lõi`;

const desc1 = `Tầm nhìn: TPG hướng đến mục tiêu trở thành Trung tâm Logistic hiện đại, thông minh với đầy đủ 03 chức năng: Chiếu xạ - Lưu trữ - Vận chuyển tại khu vực Đồng Bằng Sông Cửu Long.

Sứ mệnh: Trở thành đối tác tin cậy của các doanh nghiệp xuất khẩu Nông - Thủy sản Việt Nam ra thị trường thế giới; mang đến những sản phẩm an toàn nhất cho cộng đồng xã hội; không ngừng nghiên cứu phát triển để chào đón, phục vụ các đối tác tiềm năng trong và ngoài nước. `;
const desc2 = `TRỌNG - TÍN - TÂM - TRÍ - PHÁT - ÍCH 
Trong quá trình kiến tạo và phát triển, đội ngũ CBCNV của TPG luôn giữ vững 6 giá trị cốt lõi: TRỌNG - TÍN - TÂM - TRÍ - PHÁT - ÍCH. Từng mỗi bộ phận đảm nhiệm một vai trò nhất định nhưng luôn hướng về mục tiêu chung và không thể tách rời. Tất cả tạo nên sự kết hợp hài hoà, một tập thể đoàn kết và luôn tuân thủ những giá trị cốt lõi để nâng tầm phát triển mỗi ngày.`;

const MissionAndVaule = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['content-left']}>
          <NumberGeneralInfo title={title1} desc={desc1} />
          <div className={styles['line']}></div>
          <NumberGeneralInfo title={title2} desc={desc2} />
        </div>

        <div className={styles['content-right']}>
          <Image
            src={mission}
            alt=''
            width={813}
            height={900}
            layout='responsive'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default React.memo(MissionAndVaule);
