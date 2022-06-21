import React, { useRef } from 'react';
import styles from './MissionAndVaule.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import mission from '@assets/about-us/Mission-and-value.png';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const title1 = `Tầm nhìn sứ mệnh`;
const title2 = `Giá trị cốt lõi`;

const desc1 = `Tầm nhìn: TPI trở thành trung tâm logistic với đầy đủ chức năng: vận tải - phân phối - lưu trữ - chiếu xạ tại khu vực đồng bằng sông Cửu Long.

Sứ Mệnh: TPI với sứ mệnh trở thành người bạn đồng hành của các doanh nghiệp xuất khẩu nông sản ra thị trường thế giới; mang lại sản phẩm “lành-sạch-ngon” cho cộng đồng xã hội, chúng tôi không ngừng nghiên cứu, phát triển để chào đón, phục vụ các đối tác tiềm năng trong và ngoài nước.`;
const desc2 = `Liên tục cải tiến để luôn dẫn đầu về công nghệ chiếu xạ.
Nỗ lực đầu tư cả về trí tuệ con người cùng với trang thiết bị hiện đại bậc nhất.
Coi trọng việc nghiên cứu đáp ứng nhu cầu khách hàng, cũng như các hoạt động tiếp nhận, lắng nghe phản hồi của khách hàng.`;

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
            placeholder='blur'
            quality={100}
          />
        </div>
      </div>
    </>
  );
};
export default MissionAndVaule;
