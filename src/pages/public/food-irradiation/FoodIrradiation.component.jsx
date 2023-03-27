import React, { useRef } from 'react';
import { Breadcrumb } from 'components/own/breadcrumb';
import { NewsBlock } from 'components/own/news-block';
import { VideoTop } from 'components/own/video-top';
import { FoodIrradiationSystem } from './food-irradiation-system';
import styles from './FoodIrradiation.module.scss';
import { LogisticsAndSocial } from 'components/own/logistics-and-social';
import { MethodIrradiation } from './method-irradiation';
import { ProductOfIrradiation } from './products-irradiation';
import { logisticsAndSocial } from '@constants/language-option';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { breadcrumb } from '@constants/language-option';
import { VideoDescTitle } from 'components/own/video-desc-title';

const FoodIrradiation = () => {
  const refLang = useRef();
  useChooseLanguage(logisticsAndSocial, refLang);

  return (
    <>
      <div className={styles['container']}>
        <Breadcrumb data={breadcrumb.foodIrradiation} />
        {/*<VideoTop />*/}

        <FoodIrradiationSystem />
        <ProductOfIrradiation />
        {/*<MethodIrradiation />*/}
        <VideoDescTitle 
          videoInfo = 'https://www.youtube.com/watch?v=nNgW2NUjv6s'
          title = 'Chiếu xạ bằng tia gamma (Cobalt 60)'
          desc =
            'Là phương pháp thích hợp để chiếu xạ hầu hết các loại thực phẩm, vì nó có khả năng xuyên thấu cao. Nhờ khả năng thâm nhập tốt vào nhiều loại vật liệu, sản phẩm, bao bì, đây chính là là một ưu điểm lớn của phương pháp chiếu xạ bằng tia Gamma, giúp xử lý hiệu quả các sản phẩm dày, mật độ cao và các gói hàng lớn bao gồm cả pallet.'
          videoID = 'chieu-xa-cobalt-1'
        />
        <VideoDescTitle 
          videoInfo = 'https://www.youtube.com/watch?v=nNgW2NUjv6s'
          title = 'Chiếu xạ bằng chùm electron (E-Beam)'
          desc =
            'Các chùm tia được tạo ra bởi điện, các electron có điện tích âm, khối lượng nhỏ do đó dễ dàng tương tác với các nguyên tử trong thực phẩm. Với khả năng truyền năng lượng trong một khoảng cách tương đối ngắn, chùm electron thích hợp sử dụng để chiếu xạ các gói thực phẩm nhỏ hơn để có thể xuyên sâu vào các thực phẩm được chiếu xạ.'
          videoID = 'chieu-xa-ebeam-1'
        />
        {/*<LogisticsAndSocial logisticsAndSocial={refLang.current?.sub} />*/}
         
      </div>
    </>
  );
};
export default React.memo(FoodIrradiation);
