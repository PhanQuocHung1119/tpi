import React, { useRef } from 'react';
import styles from './QuestionContent.module.scss';
import { QuestionAndAnswerSubContent } from '../sub-content-q-and-a';
import { useObserverItem } from 'components/hook/useObserverItem';

const arrQuestion = [
  {
    number: 1,
    title: 'Chiếu xạ là gì?',
    desc: `Chiếu xạ là sử dụng năng lượng bức xạ ion hóa để xử lý hàng hóa nhằm đảm bảo vấn đề vệ sinh và an toàn cho sản phẩm, thực phẩm. Hiện nay trên thế giới có rất nhiều nước sử dụng công nghệ này để xử lý và bảo quản hơn 40 loại sản phẩm, thực phẩm khác nhau, bao gồm trái cây, rau, ngũ cốc, cá, tôm, thịt, gia cầm, thiết bị y tế…`,
  },
  {
    number: 2,
    title: 'Mục đích của Chiếu xạ thực phẩm?',
    desc: `Phòng chống thực phẩm gây bệnh: Chiếu xạ có thể được sử dụng hiệu quả để loại bỏ vi sinh vật gây bệnh từ thực phẩm, chẳng hạn như Salmonella và Escherichia coli.

Bảo quản: Chiếu xạ có thể được sử dụng để tiêu diệt hoặc vô hoạt vi sinh vật gây hư hỏng và phân hủy thực phẩm, đồng thời kéo dài tuổi thọ của các loại thực phẩm.

Kiểm soát côn trùng: Chiếu xạ có thể được sử dụng để tiêu diệt côn trùng bên trong hoặc trên bề mặt các loại trái cây. Chiếu xạ cũng giúp giảm các hoạt động kiểm soát sâu bệnh khác có thể gây hại cho trái cây.
Ức chế sự nảy mầm và quá trình chín: Chiếu xạ có thể được sử dụng để ức chế sự nảy mầm (ví dụ như khoai tây) và trì hoãn quá trình chín của trái cây để tăng thời gian bảo quản.
`,
  },
  {
    number: 3,
    title: 'Lợi ích của việc chiếu xạ thực phẩm?',
    desc: `hực phẩm chiếu xạ rất an toàn và mang lại nhiều lợi ích.

Tính an toàn về mặt sức khỏe cũng như lợi ích về mặt kinh tế của thực phẩm chiếu xạ đã được các tổ chức có uy tín của Liên Hiệp Quốc như: Tổ chức Y tế thể giới (WHO), Tổ chức Lương nông (FAO) và Cơ quan Năng lượng nguyên`,
  },
  {
    number: 4,
    title: 'Chiếu xạ có làm thực phẩm bị nhiễm xạ?',
    desc: `Thực phẩm được chiếu xạ không tiếp xúc trực tiếp với nguồn phát ra phóng xạ, nên không thể trở thành “thực phẩm bị nhiễm phóng xạ” do đó không có tác động xấu đến người sử dụng.`,
  },
  {
    number: 5,
    title: 'Chiếu xạ có tạo ra các chất độc hại cho thực phẩm và con người?',
    desc: `Thực phẩm sau khi chiếu xạ không gây ra ảnh hưởng tiêu cực đến sức khỏe con người vì không xuất hiện độc tố và không có bất kỳ sự thay đổi thành phần hóa học nào.

Các nhà máy vận hành công nghệ chiếu xạ phải tuân theo quy trình kỹ thuật rất nghiêm ngặt, rất an toàn nên không gây ra bất cứ ảnh hưởng tiêu cực nào cho môi trường sống của con người. `,
  },
  {
    number: 6,
    title: 'Chiếu xạ có làm giảm các chất dinh dưỡng có trong thực phẩm?',
    desc: 'Chiếu xạ không làm giảm giá trị dinh dưỡng mà vẫn giữ nguyên các vitamin acid amin và acid béo có trong thực phẩm… ủy ban hỗn hợp giữa FAO, WHO và IAEA, đã có nhiều nghiên cứu và khẳng định chiếu xạ không làm giảm các tố chất dinh dưỡng trong thực phẩm.',
  },
];
const QuestionContent = () => {
  const refContainer = useRef();
  useObserverItem(refContainer, styles);

  return (
    <>
      <div className={styles['container']} ref={refContainer}>
        <div className={styles['title']}>{'Q&A - Hỏi đáp'}</div>
        <div className={styles['desc']}>Thông tin chi tiết về TPI</div>
        <div className={styles['content-wrapper']}>
          {arrQuestion.map((item, index) => (
            <QuestionAndAnswerSubContent
              key={index}
              number={item.number}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
        <div className={styles['pagination']}>
          <div className={styles['pagination__number']}>
            <div className={styles['arrow-left']}></div>
          </div>
          <div className={styles['pagination__number']}>1</div>
          <div className={styles['pagination__number']}>2</div>
          <div className={styles['pagination__number']}>3</div>
          <div className={styles['pagination__number']}>4</div>
          <div className={styles['pagination__number']}>5</div>
          <div className={styles['pagination__number']}>
            <div className={styles['arrow-right']}></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionContent;
