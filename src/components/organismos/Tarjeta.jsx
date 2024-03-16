import { useState } from 'react';
import Pantalla from '../atomos/Pantalla';
import GrupoBotones from '../moleculas/GrupoBotones';
import GrupoCaracteristicas from '../moleculas/GrupoCaracteristicas';
import styles from './Tarjeta.module.css';
const Tarjeta = () => {
	// Lifting state up
	const [estado, setEstado] = useState('Aburrido');
	// const [tiempoVida, setTiempoVida] = useState(parseInt(sessionStorage.getItem('tiempoVida') || '0'));

	const handleClick = nuevoEstado => {
		setEstado(nuevoEstado);
	};
	return (
		<div className={styles.columnContainer}>
			<h3>Pepe</h3>
			<div className={styles.rowContainer}>
			<GrupoCaracteristicas
				nombre={'Pepe'}
				estado={estado}
			/>
			<Pantalla/>
			
			</div>
			
			<GrupoBotones onClick={handleClick}></GrupoBotones>
			
		</div>
	);
};

export default Tarjeta;
