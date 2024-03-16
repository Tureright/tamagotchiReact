import { useEffect, useState } from 'react';
import styles from './CaracteristicaPerfil.module.css';
import { FaRegClock, FaRegSmile   } from 'react-icons/fa';
const CaracteristicaPerfil = ({ titulo, descripcion, children }) => {
	console.log('renderCarPerfil', titulo, children);
	const [tiempoVida, setTiempoVida] = useState(
		parseInt(sessionStorage.getItem('tiempoVida' + children) || '0'),
	);
	useEffect(() => {
		if (titulo === 'Tiempo vivo') {
			// Esto permite encontrar el valor actualizaco, incluso en concurrencia
			const intervalId = setInterval(() => {
				setTiempoVida(prevTiempoVida => prevTiempoVida + 1);
			}, 1000);
			return () => clearInterval(intervalId);
		}
	}, []);
	// Setear en el session storage
	useEffect(() => {
		sessionStorage.setItem('tiempoVida' + children, tiempoVida.toString());
	}, [tiempoVida]);
	if (titulo === 'Tiempo vivo') {
		return (
			<div className={styles.rowContainer}>
				<FaRegClock className={styles.emoticono}/>
			<div className={styles.containerCaracteristica}>
				<p style={{fontStyle: "italic"}} className={styles.titulo}>{titulo}</p>
				<p style={{paddingLeft: "10px", fontWeight:"bold"}} className={styles.descripcion}>{tiempoVida}</p>
			</div>
			</div>
			
		);
	} else {
		return (
			<div className={styles.rowContainer}>
				<FaRegSmile className={styles.emoticono}/>

				<div className={styles.containerCaracteristica}>
				<p style={{fontStyle: "italic"}} className={styles.titulo}>{titulo}</p>
				<p style={{paddingLeft: "10px", fontWeight:"bold"}} className={styles.descripcion}>{descripcion}</p>
			</div>
			</div>
			
		);
	}
};

export default CaracteristicaPerfil;
