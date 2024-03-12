import styles from '../../style/global/button.module.css';

const Button = ({ label, link }) => {
  return (
        <a className={styles.button} href={link}>{label}</a>
  );
};

export default Button;
