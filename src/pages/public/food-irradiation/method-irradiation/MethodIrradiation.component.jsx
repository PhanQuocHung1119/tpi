import React from 'react';
import styles from './MethodIrradiation.module.scss';
import { SubMethodIrradiation } from './sub-method-irradiation';
import { IrradiationFlow } from './irradiation-flow';

const MethodIrradiation = () => {
  return (
    <>
      <div className={styles['container']}>

        <IrradiationFlow />

        <SubMethodIrradiation />
        <SubMethodIrradiation />
      </div>
    </>
  );
};
export default React.memo(MethodIrradiation);
