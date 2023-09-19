import React from 'react'
import styles from './HowWeWork.module.css'
import Step from '../Components/Step'

const HowWeWork = () => {

const steps=[
 {
  id:1,
  text:"You tell us your proposal",
},
{id:2,
  text:"We will contact you to schedule a meeting",
},
{id:3,
  text:"We develop your website",
},
{id:4,
  text:"We deliver your website",
},
{id:5,
  text:"We will contact you to schedule a meeting",}
]

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>How We work</h2>
     {
      steps.map(x => (
    <Step text={x.text} step={x.id} />    
      ))
     }
    </div>
  )
}

export default HowWeWork