import React from 'react'
import styles from './Services.module.css'


const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>We solve your company's problems by creating amazing web pages. </p>
      <img className={styles.pcImage} src= {require('../assets/imagenech (2).jpg')} alt="pc"/>
    </div>
  )
}

export default Services