import React, { useRef } from 'react';
import styles from './FutureGoal.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import mem1 from '@assets/team-member/future-goal-1.png';
import mem2 from '@assets/team-member/future-goal-2.png';
import { NumberAndDesc } from 'components/own/number-and-desc';
import { NumberGeneralInfo } from 'components/own/number-general-info';

const title1 = `Phát triển kinh doanh`;
const desc1 =
  `Chúng tôi liên tục cập nhật công nghệ, cải tiến kỹ thuật, đầu tư trang thiết bị hiện đại trong cả dịch vụ chiếu xạ, kho lạnh lưu trữ và vận chuyển. Luôn coi trọng việc nghiên cứu, ứng dụng công nghệ nhằm đáp ứng yêu cầu khắt khe của thị trường, đồng thời tiếp nhận, lắng nghe phản hồi của khách hàng để nâng cao chất lượng dịch vụ, góp phần thúc đẩy hoạt động xuất khẩu hàng hóa, khẳng định giá trị Nông sản - Thuỷ sản Việt Nam và sự phát triển của TPG.`;
const title2 = `Phát triển nguồn nhân lực`;
const desc2 = `Đội ngũ nhân sự là tài sản quý giá nhất của doanh nghiệp, chúng tôi chú trọng việc bồi dưỡng, đào tạo nên những nhân sự ưu tú, không ngừng tạo động lực, thúc đẩy nguồn nhân lực phát triển, hướng đến xây dựng môi trường làm việc năng động, sáng tạo, chuyên nghiệp và có nhiều cơ hội thăng tiến.`;
const title3 = `Phát triển cộng đồng & xã hội`;
const desc3 = `Giá trị doanh nghiệp luôn gắn liền với những giá trị mang đến cho cộng đồng. Trong quá trình hoạt động, TPG cam kết giảm thiểu những tác động đến môi trường, tạo công ăn việc làm cho người lao động, đóng góp trách nhiệm với xã hội thông qua các hoạt động thiện nguyện, xây dựng vì sự phát triển, văn minh của cộng đồng.`;
const FutureGoal = () => {
  const refImageWrapper = useRef();
  const refMemberContent = useRef();

  useObserverItem(refImageWrapper, styles);
  useObserverItem(refMemberContent, styles);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['member-img-wrapper']} ref={refImageWrapper}>
          <div className={styles['member-img']}>
            <Image
              src={mem1}
              alt=''
              width={715}
              height={500}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
          <div className={styles['member-img']}>
            <Image
              src={mem2}
              alt=''
              width={715}
              height={500}
              layout='responsive'
              objectFit='contain'
              quality={100}
            />
          </div>
        </div>
        <div className={styles['member-content']}>
          <div className={styles['member-content__title']}>Mục tiêu phát triển</div>
          <div
            className={styles['member-content__content']}
            ref={refMemberContent}
          >
            <div className={styles['member-content__content___child']}><NumberGeneralInfo title={title1} desc={desc1} /></div>
            <div className={styles['member-content__content___child']}><NumberGeneralInfo title={title2} desc={desc2} /></div>
            <div className={styles['member-content__content___child']}><NumberGeneralInfo title={title3} desc={desc3} /></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(FutureGoal);