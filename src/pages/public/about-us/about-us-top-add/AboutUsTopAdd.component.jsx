import React, { useRef } from 'react';
import styles from './AboutUsTopAdd.module.scss';
import Image from 'next/image';
import { useObserverItem } from 'components/hook/useObserverItem';
import { NumberGeneralInfo } from 'components/own/number-general-info';
import about_us_img from '@assets/about-us/About-Us-Image-message.png';

const title = `Thông điệp Ban Lãnh Đạo`;
const desc = `Việt Nam có nhiều tiềm năng để phát triển nông nghiệp, Đồng Bằng Sông Cửu Long là trung tâm lớn của ngành sản xuất Nông - Thủy sản, tuy nhiên những lợi thế đó vẫn chưa được tận dụng để có thể khẳng định thương hiệu và giá trị Nông - Thuỷ sản Quốc gia trên thị trường Quốc tế.

Toàn Phát Group ra đời với tầm nhìn trở thành một Trung tâm Logistic (LOGISTIC HUB) cung cấp cả 03 dịch vụ: “Chiếu xạ - Lưu trữ - Vận chuyển” với công nghệ hiện đại, kỹ thuật tiên tiến và chi phí tối ưu nhất. Chúng tôi luôn cam kết đồng hành về giá, hỗ trợ các doanh nghiệp xuất khẩu Nông - Thủy sản có thêm lợi thế cạnh tranh trên thị trường quốc tế.
Từng mục tiêu nhỏ hướng về mục tiêu lớn, chúng tôi không chỉ nỗ lực đầu tư cả về trí tuệ con người, công nghệ hiện đại, trang thiết bị tiên tiến, mà còn quan tâm đến phản hồi của khách hàng để nâng cao chất lượng dịch vụ, tạo dựng uy tín thương hiệu và đưa TPG ngày càng vững mạnh.`;

const AboutUsTopAdd = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);
  return (
    <>
      <div className={styles['container']} ref={refContainer}>
      {/*<div className={styles['content-left']}>
          <div className={styles['icon-number']}>
            <Image
              src={about_us_img}
              alt=''
              width={580}
              height={233}
              layout='responsive'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>
        </div>*/}
        <div className={styles['content']}>
          <NumberGeneralInfo title={title} desc={desc} />
        </div>
        
      </div>
    </>
  );
};
export default React.memo(AboutUsTopAdd);
