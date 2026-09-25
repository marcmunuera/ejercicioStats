import styles from './ContainerLeft.module.css';

const ContainerLeft = () => {
	return (
		<>
			<div className={styles.background}>
				<div className={styles.alingItems}>
					<p className={styles.title}>Your Result</p>
					<div className={styles.containerPuntuation}>
						<p className={styles.puntuation1}>76</p>
						<p className={styles.puntuation2}>of 100</p>
					</div>
				</div>
				<div className={styles.alingItems}>
					<p className={styles.title2}>Great</p>
					<p className={styles.description}>
						You scored higher than 65% of the people who have taken these test
					</p>
				</div>
			</div>
		</>
	);
};
export default ContainerLeft;
