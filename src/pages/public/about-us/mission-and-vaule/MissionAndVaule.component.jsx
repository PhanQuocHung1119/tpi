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
Trong quá trình kiến tạo và phát triển, đội ngũ CBCNV của TPG luôn giữ vững 6 giá trị cốt lõi: TRỌNG - TÍN - TÂM - TRÍ - PHÁT - ÍCH. Từng mỗi bộ phận đảm nhiệm một vai trò nhất định nhưng luôn hướng về mục tiêu chung và không thể tách rời. Tất cả tạo nên sự kết hợp hài hoà, một tập thể đoàn kết và luôn tuân thủ những giá trị cốt lõi để nâng tầm phát triển mỗi ngày.
TRỌNG: TPG đề cao giá trị của sự tôn trọng trong mọi hoàn cảnh. Tôn trọng bản thân, đồng nghiệp, tập thể, đối tác và khách hàng, đó là kim chỉ nam cho sự phát triển bền vững và gắn kết mối quan hệ lâu dài. Hơn thế nữa, sự tự trọng cũng là một điều thiết yếu, từng cá nhân luôn biết coi trọng những phẩm chất tốt đẹp của bản thân, coi trọng danh dự, uy tín của tổ chức, hình thành nên một tập thể chính trực và luôn coi trọng lẽ phải.
TÍN: TPG đặt chữ “Tín” làm giá trị chuẩn mực trong quá trình làm việc với khách hàng, đối tác. Từng mỗi dịch vụ cung cấp đều đem lại giá trị đích thực, minh bạch trong tất cả các giao dịch, chuyên nghiệp trong mọi quy trình để đảm bảo chất lượng, uy tín thương hiệu. 
TÂM: Với chúng tôi, hành động từ tâm là tham chiếu cho sự trường tồn của TPG. Đó là cái tâm và cái đức trong từng dịch vụ mang đến cho khách hàng, trong việc đối xử với CBCNV hay cả những hành động có ảnh hưởng đến sự phát triển của cộng đồng. Khi xuất phát từ những giá trị tốt đẹp, chúng tôi tin rằng đó là nền tảng vững chắc để vươn đến những tầm cao mới. 
TRÍ: TPG lấy trí làm sức mạnh cạnh tranh và nguồn năng lượng cho sự sáng tạo. Luôn khuyến khích toàn bộ CBCNV nghiên cứu, học hỏi, khai phá giá trị tiềm năng của mỗi người, từ đó ứng dụng công nghệ vào quản trị, vận hành, kỹ thuật để ngày một nâng cao các giá trị, chất lượng dịch vụ.
PHÁT: TPG luôn đề cao tinh thần dám nghĩ dám làm của tập thể CBCNV trong công ty. Sự phát triển của mỗi cá nhân, không ngừng nỗ lực để vượt qua những thử thách là điều kiện thiết yếu tạo nên một tập thể vững mạnh, thành công và phát đạt. 
ÍCH: TPG luôn tâm niệm lợi ích của khách hàng/đối tác/cộng đồng phải được đặt lên trên hết, chúng tôi lấy đó làm trọng tâm để phụng sự, cống hiến vì sự phát triển chung của xã hội. Ở khía cạnh khác, Ban lãnh đạo TPG luôn coi trọng lợi ích của từng thành viên đã đồng hành, gắn bó vì sự phát triển của tập thể. Khi mỗi cá nhân luôn giữ tinh thần cầu tiến, biết trau dồi nội lực và tích cực đóng góp, đó là giữ vững lợi ích của chính mình.`;

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
