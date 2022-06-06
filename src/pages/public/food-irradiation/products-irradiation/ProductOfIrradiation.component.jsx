import React from 'react';
import styles from './ProductOfIrradiation.module.scss';
import { SubProductIrradiation } from './sub-products-irradiation';
import pro1 from '@assets/food-irradiation/pro-1.png';
import pro2 from '@assets/food-irradiation/pro-2.png';
import pro3 from '@assets/food-irradiation/pro-3.png';
import pro4 from '@assets/food-irradiation/pro-4.png';
import pro5 from '@assets/food-irradiation/pro-5.png';
import pro6 from '@assets/food-irradiation/pro-6.png';
import pro7 from '@assets/food-irradiation/pro-7.png';
import pro8 from '@assets/food-irradiation/pro-8.png';
import pro9 from '@assets/food-irradiation/pro-9.png';
import pro10 from '@assets/food-irradiation/pro-10.png';
import pro11 from '@assets/food-irradiation/pro-11.png';
import pro12 from '@assets/food-irradiation/pro-12.png';
import pro13 from '@assets/food-irradiation/pro-13.png';
import pro14 from '@assets/food-irradiation/pro-14.png';
import pro15 from '@assets/food-irradiation/pro-15.png';

const arrSubProducts = [
  { image: pro1, desc: 'Trái cây tươi' },
  { image: pro2, desc: 'Đồ thủ công mỹ nghệ' },
  { image: pro3, desc: 'Gia vị' },
  { image: pro4, desc: 'Cá tra đông lạnh' },
  { image: pro5, desc: 'Thiết bị y tế' },
  { image: pro6, desc: 'Đá trang sức' },
  { image: pro7, desc: 'Thực phẩm - Nông sản' },
  { image: pro8, desc: 'Tôm đông lạnh' },
  { image: pro9, desc: 'Dược liệu, đông dược' },
  { image: pro10, desc: 'Thủy hải sản đông lạnh' },
  { image: pro11, desc: 'Hóa mỹ phẩm' },
  { image: pro12, desc: 'Các mặt hàng khô khác' },
  { image: pro13, desc: 'Trái cây đông lạnh' },
  { image: pro14, desc: 'Sản phẩm bằng tre, gỗ' },
  { image: pro15, desc: 'Thức ăn thú cưng' },
];

const ProductOfIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>
          Các sản phẩm được chiếu xạ tại TPI:
        </div>
        <div className={styles['content']}>
          {arrSubProducts.map((item, index) => (
            <SubProductIrradiation
              key={index}
              image={item.image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductOfIrradiation;
