import React, { useRef } from 'react';
import styles from './ProductOfIrradiation.module.scss';
import { productOfIrradiation } from '@constants/language-option';
import { SubProductIrradiation } from './sub-products-irradiation';
import { useObserverItem } from 'components/hook/useObserverItem';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';

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

const proImages = [
  { image: pro1 },
  { image: pro2 },
  { image: pro3 },
  { image: pro4 },
  { image: pro5 },
  { image: pro6 },
  { image: pro7 },
  { image: pro8 },
  { image: pro9 },
  { image: pro10 },
  { image: pro11 },
  { image: pro12 },
  /*{ image: pro13 },
  { image: pro14 },
  { image: pro15 },*/
];

const ProductOfIrradiation = () => {
  const refContent = useRef();
  const refLang = useRef(null);

  useObserverItem(refContent, styles);
  useChooseLanguage(productOfIrradiation, refLang);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>{refLang.current?.title}</div>
        <div className={styles['content']} ref={refContent}>
          {refLang.current?.subDesc.map((item, index) => (
            <SubProductIrradiation
              key={index}
              image={proImages[index].image}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(ProductOfIrradiation);
