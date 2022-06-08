import React from 'react';
import styles from './Goals.module.scss';
import { Breadcrumb } from 'components/own/breadcrumb';
import { GoalsBanner } from './goals-banner';
import { GoalsMain } from './goals-main';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';

import { NewsBlock } from 'components/own/news-block';

const path = [{ path: '#', title: 'Mục tiêu phát triển' }];
const logisticsAndSocial = [
  {
    title: 'Chiến lược phát triển nguồn nhân lực',
    desc: `Tài sản lớn nhất của một doanh nghiệp không phải là tiền cũng không phải bất động sản mà chính là con người. Vì vậy phát triển nguồn nhân lực là vấn đề thiết yếu và được ưu tiên hàng đầu.`,
  },
  {
    title: 'Xã hội và cộng đồng',
    desc: `Hoạt động từ thiện với tinh thần tương thân tương ái, cảm thông và sẻ chia những khó khăn với cộng đồng.
Không chỉ dừng lại ở chiếu xạ nông sản và thủy sản, TPI còn nghiên cứu thực hiện ứng dụng chiếu xạ trên nhiều mặt hàng khác góp phần thúc đẩy xuất khẩu hàng hóa, và khẳng định giá trị Quốc gia.
Giá chiếu xạ trái cây tươi tại Việt Nam hiện còn khá cao. TPI cố gắng để đưa ra mức phí chiếu xạ hợp lý hơn nhằm hỗ trợ các nhà xuất khẩu có thêm sức cạnh tranh trên thị trường quốc tế.
`,
  },
];
const Goals = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <GoalsBanner />
        <GoalsMain />
        <LogisticsAndSocial logisticsAndSocial={logisticsAndSocial} />
        <NewsBlock />
      </div>
    </>
  );
};
export default Goals;
