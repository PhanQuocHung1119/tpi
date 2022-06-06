import React from 'react';
import styles from './LogisticsAndDistribution.module.scss';
import number_2_3 from '@assets/number/number-2-3.png';
import number_2_4 from '@assets/number/number-2-4.png';

import { NumberGeneralInfo } from 'components/own/number-general-info';

const title1 = 'Vận chuyển';
const title2 = 'Phân phối';

const desc1 = `Với định hướng trở thành một trung tâm logistics với đầy đủ chức năng: vận tải - phân phối - lưu trữ - chiếu xạ. Trong tương lai kho lạnh Toàn Phát sẽ kết hợp chặt chẽ với các doanh nghiệp vận chuyển lạnh để có thể đáp ứng tối đa nhu cầu của khách hàng tạo dựng chuỗi cung ứng khép kín hiện đại nhất.
Một kho lạnh đạt chuẩn.
Cung ứng xe tải đông lạnh riêng để vận chuyển hàng hóa.`;

const desc2 = `Hệ thống kho lạnh Toàn Phát định hướng phát triển trở thành một trung tâm phân phối logistics với đầy đủ chức năng đáp ứng hầu hết nhu cầu của khách hàng.
Nhiều dịch vụ đa dạng: vận chuyển, bốc xếp, dán nhãn, đóng gói hàng nhỏ lẻ, xử lý đơn hàng, giao nhận.
Nhập hàng an toàn, nhanh chóng, phục vụ tốt.
Có khu vực riêng để xử lý đơn hàng, áp dụng tính công nghệ cao.
Cầu nối giữa nhà cung cấp và khách hàng
`;

const LogisticsAndDistribution = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content']}>
          <NumberGeneralInfo number={number_2_3} title={title1} desc={desc1} />
        </div>
        <div className={styles['content']}>
          <NumberGeneralInfo number={number_2_4} title={title2} desc={desc2} />
        </div>
      </div>
    </>
  );
};
export default LogisticsAndDistribution;
