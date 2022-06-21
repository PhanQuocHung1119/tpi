import React from 'react';
import styles from './TeamMember.module.scss';
import Image from 'next/image';
import member1 from '@assets/team-member/member-1.png';
import member2 from '@assets/team-member/member-2.png';
import member3 from '@assets/team-member/member-3.png';

const members = [
  {
    image: member1,
    desc: `Name goes here
Tittle goes here`,
  },
  {
    image: member2,
    desc: `Name goes here
Tittle goes here`,
  },
  {
    image: member3,
    desc: `Name goes here
Tittle goes here`,
  },
];
const TeamMember = () => {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['content-wrapper']}>
          <div className={styles['title']}>Our team</div>
          <div className={styles['title-main']}>
            Our team member is ready to help our clients!
          </div>
          <div className={styles['desc']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet,
            consequat egestas dictum posuere pellentesque fermentum.
          </div>
        </div>
        <div className={styles['member-wrapper']}>
          {members.map((item, index) => (
            <div className={styles['member']} key={index}>
              <div className={styles['member__img']}>
                <Image
                  src={item.image}
                  alt=''
                  width={384}
                  height={436}
                  layout='responsive'
                  objectFit='contain'
                  placeholder='blur'
                  quality={100}
                />
              </div>
              <div className={styles['member__desc']}>
                <div className={styles['bar']}></div>
                <div className={styles['desc']}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default React.memo(TeamMember);
