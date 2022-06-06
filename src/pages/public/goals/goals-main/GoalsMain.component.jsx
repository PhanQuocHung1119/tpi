import { NumberAndDesc } from 'components/own/number-and-desc';
import React from 'react';
import styles from './GoalsMain.module.scss';

const arrGoals = [
  {
    number: 1,
    desc: `TPI hứa hẹn sẽ vươn xa tầm quốc tế và mang lại giá trị bền vững đến đối tác cũng như toàn cộng đồng.`,
  },
  {
    number: 2,
    desc: `Tất cả đội ngũ, CBNV cùng vươn lên, tỏa sáng và tập thể luôn đồng lòng, gắn kết như những viên đá quý.`,
  },
  {
    number: 3,
    desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
  },
  {
    number: 4,
    desc: `Từ lãnh đạo đến đội ngũ nhân viên các cấp các đội đều được đối xử bình đẳng, sẻ chia và được lắng nghe.`,
  },
  {
    number: 5,
    desc: `Sự gắn kết thể hiện trong đời sống sinh hoạt thường nhật tại công ty như những bữa ăn cùng nhau, những buổi tụ họp sinh nhật hay liên hoan.`,
  },
  {
    number: 6,
    desc: `Đội ngũ CBNV luôn hướng về mục tiêu chung, mỗi bộ phận luôn đảm nhiệm vai trò nhất định không thể tách rời. Từng mục tiêu nhỏ hướng về mục tiêu lớn đưa TPI ngày càng lớn mạnh và vươn xa tầm khu vực.`,
  },
];

const GoalsMain = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Mục tiêu phát triển</div>
        <div className={styles['content-wrapper']}>
          {arrGoals.map((item, index) => (
            <NumberAndDesc key={index} number={item.number} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GoalsMain;
