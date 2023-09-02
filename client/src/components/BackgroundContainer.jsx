import React from 'react';
import styles from '../styles/BackgroundContainer.module.scss'; 

function BackgroundContainer() {
  return (
    <div className={styles['custom-background-container']}>
      {/* Background image */}
      <div className={styles['custom-background-image']}></div>
      
      {/* Container content */}
      <div className={styles['custom-container']}>
        <h1 className={styles['custom-title']}>Embark on Exciting Adventures in a Whole New Way!</h1>
      </div>
    </div>
  );
}

export default BackgroundContainer;
