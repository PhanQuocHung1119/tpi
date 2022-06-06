import React from 'react';
import styles from './MethodIrradiation.module.scss';
import { SubMethodIrradiation } from './sub-method-irradiation';

const MethodIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>
        <SubMethodIrradiation />
        <SubMethodIrradiation />
      </div>
    </>
  );
};
export default MethodIrradiation;
