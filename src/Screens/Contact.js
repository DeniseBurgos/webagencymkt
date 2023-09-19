import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div name="Contact"  className={styles.contact}>
      <h2 className={styles.titleContact}  > Contact </h2>
      <form className={styles.form} action='https://getform.io/f/a4bd88f7-a846-4e3a-a9e6-08605e91309a' method='POST'>
        <label for="Name">Name</label>
       <input id="Name" name='Name' className={styles.input}></input>
        <label for="Email">Email</label>
       <input id="Email" name='Email' type='Email' className={styles.input}></input>
        <label>Message</label>
       <textarea></textarea>
       <button type='submit'>Send</button>
      </form>

    </div>
  )
}

export default Contact