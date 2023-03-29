import React, { useRef } from 'react';
import styles from './AboutUsTeamMember.module.scss';
import { useObserverItem } from 'components/hook/useObserverItem';
import Image from 'next/image';
import mem1 from '@assets/team-member/team-member-img-1.png';
import mem2 from '@assets/team-member/team-member-img-2.png';
import { NumberAndDesc } from 'components/own/number-and-desc';

const desc1 = `Sự đa dạng hòa hợp :
TPG chú trọng xây dựng văn hóa doanh nghiệp xuất phát từ sự đa dạng hòa hợp. Dù là bất cứ ai, không phân biệt vùng miền, xuất phát điểm, từ những nhân sự cốt cán đến những nhân sự mới đều được công nhận năng lực, khuyến khích học hỏi, phát huy điểm mạnh và thúc đẩy tư duy khác biệt để phát triển nhân tài.`;
const desc2 = `Phát triển không ngừng :
Luôn nâng cao kỹ năng làm việc, không ngừng sáng tạo và chinh phục các mục tiêu to lớn hơn là những thách thức mà các thành viên TPG cần vượt qua. Để kiến tạo nên tương lai mơ ước, mỗi cá nhân đều cần thử nghiệm những điều mới, đưa ra thử thách và vượt giới hạn chính là công thức để đạt được những thành quả cao hơn.`;
const desc3 = `Gắn kết và thấu hiểu
TPG xây dựng một môi trường làm việc cởi mở, thân thiện, nhân viên được tự do đóng góp và tự do nêu ý kiến, đó là chìa khóa giúp mọi người hiểu nhau hơn. Nhân sự tại TPG thường xuyên có những hoạt động tập thể để tăng tính gắn kết và thấu hiểu; tham gia các hoạt động vì cộng đồng để tri ân những cơ hội và giá trị mà TPG đạt được, cũng như trân trọng hơn những gì mình đang có.`;
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
              loading='lazy'
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
              loading='lazy'
            />
          </div>
        </div>
        <div className={styles['member-content']}>
          <div className={styles['member-content__title']}>
            Văn hoá doanh nghiệp
          </div>
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
