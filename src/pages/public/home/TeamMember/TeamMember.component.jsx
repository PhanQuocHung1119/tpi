import React, { useRef } from 'react';
import styles from './TeamMember.module.scss';
import Image from 'next/image';
import { useChooseLanguage } from 'components/hook/useChooseLanguage';
import { teamMember } from '@constants/language-option';
import member1 from '@assets/team-member/member-1.png';
import member2 from '@assets/team-member/member-2.png';
import member3 from '@assets/team-member/member-3.png';

const members = [
  {
    image: member1,
  },
  {
    image: member2,
  },
  {
    image: member3,
  },
];

const TeamMember = () => {
  const refContent = useRef();
  useChooseLanguage(teamMember, refContent);

  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['title']}>{refContent.current?.title}</div>
          <div className={styles['title-main']}>
            {refContent.current?.titleMain}
          </div>
          <div className={styles['desc']}>{refContent.current?.desc}</div>
        </div>
        <div className={styles['member-wrapper']}>
          {refContent.current?.sub.map((item, index) => (
            <div className={styles['member']} key={index}>
              <div className={styles['member__img']}>
                <Image
                  src={members[index].image}
                  alt=''
                  width={384}
                  height={436}
                  layout='responsive'
                  objectFit='contain'
                  quality={100}
                />
              </div>
              <div className={styles['member__desc']}>
                <div className={styles['bar']}></div>
                <div className={styles['desc']}>
                  {item.title}
                  <br />
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(TeamMember);
