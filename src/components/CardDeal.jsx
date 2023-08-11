import React from 'react'
import {card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal<br className='sm:block hidden'/>in a few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Get ready to elevate your spending experience with our exclusive card deals. Whether it's dining, travel, or shopping, our curated offers are tailored to suit your lifestyle. Enjoy unparalleled privileges that redefine the way you use your card.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
      
    </section>
  )
}

export default CardDeal