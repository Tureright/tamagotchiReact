import Tarjeta from './components/organismos/Tarjeta';
import styles from './App.module.css';
import Boton from './components/atomos/Boton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NuevoTamagotchi from './components/paginas/NuevoTamagotchi';

const App = () => {
	return (
		<div>
			<Router>
				<div className={styles.container}>
					<Link to={'/NuevoTamagotchi'}>
						<Boton texto={'Nuevo Tamagotchi'}></Boton>
					</Link>
					<Link to={'/MisTamagotchis'}>
						<Boton texto={'Mis Tamagotchis'}></Boton>
					</Link>
				</div>

				<Routes>
					<Route path='/' element={<p></p>}></Route>
					<Route
						path='/NuevoTamagotchi'
						element={<NuevoTamagotchi></NuevoTamagotchi>}
					></Route>
					<Route path='/MisTamagotchis' element={<Tarjeta></Tarjeta>}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
