import React from 'react';
import styles from '../Footer/Footer.module.css';
import {ReactComponent as Dogs} from '../../assets/dogs-footer.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p> Dogs. Alguns direitos reservados </p>
    </div>
  )
}

export default Footer;