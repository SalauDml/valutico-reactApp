import React from 'react'
import styles from './Why.module.css'


function Boxes({heading, para, why, features}) {
  return (
    <div>
      {why && ( 
        <div className={styles.box}>
            <h3> {heading}</h3>
            <p>{para}</p>
        </div>
      )}

      {
        features && (

          <div className={styles.features}>
            <h3>{heading}</h3>
            <p>{para}</p>
          </div>
        )
      }
    </div>
  )
}

export default Boxes
