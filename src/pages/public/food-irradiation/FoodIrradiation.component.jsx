import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { VideoTop } from 'components/own/video-top';
import React from 'react';
import { FoodIrradiationSystem } from './food-irradiation-system';
import styles from './FoodIrradiation.module.scss';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';
import { MethodIrradiation } from './method-irradiation';
import { ProductOfIrradiation } from './products-irradiation';

const path = [
  { path: '#', title: 'Lĩnh vực tiên phong' },
  { path: '#', title: 'Chiếu xạ' },
];
const logisticsAndSocial = [
  {
    title: 'Vận chuyển',
    desc: `Với định hướng trở thành một trung tâm logistics với đầy đủ chức năng: vận tải - phân phối - lưu trữ - chiếu xạ. Trong tương lai kho lạnh Toàn Phát sẽ kết hợp chặt chẽ với các doanh nghiệp vận chuyển lạnh để có thể đáp ứng tối đa nhu cầu của khách hàng tạo dựng chuỗi cung ứng khép kín hiện đại nhất.
Một kho lạnh đạt chuẩn.
Cung ứng xe tải đông lạnh riêng để vận chuyển hàng hóa.`,
  },
  {
    title: 'Phân phối',
    desc: `Hệ thống kho lạnh Toàn Phát định hướng phát triển trở thành một trung tâm phân phối logistics với đầy đủ chức năng đáp ứng hầu hết nhu cầu của khách hàng.
Nhiều dịch vụ đa dạng: vận chuyển, bốc xếp, dán nhãn, đóng gói hàng nhỏ lẻ, xử lý đơn hàng, giao nhận.
Nhập hàng an toàn, nhanh chóng, phục vụ tốt.
Có khu vực riêng để xử lý đơn hàng, áp dụng tính công nghệ cao.
Cầu nối giữa nhà cung cấp và khách hàng`,
  },
];

const FoodIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={path} />
        <VideoTop />
        <FoodIrradiationSystem />
        <ProductOfIrradiation />
        <MethodIrradiation />
        <LogisticsAndSocial logisticsAndSocial={logisticsAndSocial} />
        <NewsBlock />
      </div>
    </>
  );
};
export default React.memo(FoodIrradiation);
