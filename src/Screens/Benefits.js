import React from 'react'
import styles from './Benefits.module.css'
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitsTitle}>
      Benefits of having a website for your business
      </h2>
      <p>
        You open up to the world <BsFillDoorOpenFill />
      </p>
      <p>
        You reach more people <FaPeopleCarry />
      </p>
      <p>
        You save money <FaMoneyBillAlt />
      </p>
      <p>
        You save time <AiOutlineSchedule />
      </p>
      <p>
        You increase your sales <AiOutlineRise />
      </p>
      <p>
        You can measure your results <FiRepeat />
      </p>
    </div>
  )
}

export default Benefits