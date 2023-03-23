import React, { useRef } from 'react';
import styles from './AboutUsTeamMember.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import mem1 from '@assets/team-member/team-member-img-1.png';
import mem2 from '@assets/team-member/team-member-img-2.png';
import { NumberAndDesc } from 'components/own/number-and-desc';

const desc1 =
  'Mỗi cá nhân sẽ tạo nên tập thể, từng đóng góp nhỏ là tiền đề của những thành quả lớn. Tại TPG, chúng tôi trân trọng giá trị của từng cá nhân, từ lãnh đạo, quản lý cấp cao am hiểu kiến thức chuyên môn đến những người trẻ với nguồn năng lượng tích cực và ham học hỏi. Một tập thể luôn coi trọng lợi ích chung và hướng đến sự cải tiến sẽ tạo nên một doanh nghiệp phát triển vững mạnh. Và tất cả những giá trị, kết quả tích cực đó đều được hình thành từ việc coi trọng Văn hóa doanh nghiệp.';
const desc2 = `Với đội ngũ cán bộ nhân viên kỹ thuật, giàu kinh nghiệm đam mê nghiên cứu xây dựng và phát triển sản phẩm dịch vụ mới (chiếu xạ trái cây tươi, đo và kiểm soát suất liều bài bản) đảm bảo yếu tố an toàn vận hành và đạt yêu cầu về các chỉ tiêu của khách hàng một cách chuẩn mực và chính xác, được đào tạo từ các trường đại học chính quy hàng đầu trong nước (Đại học Bách Khoa, Đại học Khoa học tự nhiên, Đại học Công nghiệp…) với thành tích học tập nổi bậc, được trang bị đầy đủ các kỹ năng phục vụ cho nhu cầu công việc của TPI.`;
const desc3 = `Chúng tôi tin rằng: TPI sẽ chinh phục và vượt qua được mọi khó khăn thách thức và khẳng định giá trị thương hiệu của TPI trên thị trường.`;
const AboutUsTeamMember = () => {
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
          <div className={styles['member-content__title']}>Đội ngũ nhân sự & Văn hóa doanh nghiệp</div>
          <div
            className={styles['member-content__content']}
            ref={refMemberContent}
          >
            <NumberAndDesc number={1} desc={desc1} />
            <NumberAndDesc number={2} desc={desc2} />
            <NumberAndDesc number={3} desc={desc3} />
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(AboutUsTeamMember);
