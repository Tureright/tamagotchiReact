import styles from './Boton.module.css';

const Boton = ({ texto }) => <button className={styles.boton}>{texto}</button>;

export default Boton;
