import styles from './Boton.module.css';

const Boton = ({ texto, onClick }) =>{
    console.log('renderBoton')
    return<button className={styles.boton} onClick={onClick}>{texto}</button>;

} 
export default Boton;
