import styles from '../../style/global/button.module.css';

const Button = ({ label }) => {
  return (
        <button className={styles.button}>{label}</button>
  );
};

export default Button;
