import React from 'react'
import styles from './Step.module.css'

const Step = ({text, step}) => {
  return (<div className={styles.container}>
    <p className={styles.stepNumber}>
        {step} </p>
        <p className={styles.text}> {text} </p>
        

   
    <div className={styles.border}></div>
  </div>);
};

export default Step