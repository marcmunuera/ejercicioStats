import { capacitys } from '../../constants/capacitys';
import styles from './MenuCapacitys.module.css';
const MenuCapacitys = () => {
	return (
		<nav>
			{capacitys.map(capacity => {
				return (
					<div className={styles.container}>
						<div className={styles.subContainer}>
							<img className={styles.imgSize} src={capacity.icono} alt='' />
							<p className={styles.bold}>{capacity.name}</p>
						</div>
						<div className={styles.subContainer}>
							<p className={styles.bold}>{capacity.puntuation}</p>
                            <p>{capacity.puntiationTotal}</p>
						</div>
					</div>
				);
			})}
		</nav>
	);
};
export default MenuCapacitys;
