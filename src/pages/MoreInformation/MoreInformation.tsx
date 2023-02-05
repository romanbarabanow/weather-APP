import styles from './MoreInformation.module.scss'

type Props = {
	sunsetTime: string
	sunriseTime: string
	visibles: number
	tempMax: number
	tempMin: number
	sealevel: number
	windSpeed: number
	cloudless: number
}

const MoreInformation = (props: Props) => {
	return (
		<div className={styles.container_setter}>
			<div className={styles.info_cont}>
				<p className={styles.more_info_text}>Подробная информация</p>
				<div className={styles.more_info_cont}>
					<div className={styles.more_info_cont_top}>
						<div className={styles.more_cont_info}>
							<p className={styles.text_main}>Максимальная температура</p>
							<p className={styles.text_main}>Минимальная температура</p>
							<p className={styles.text_main}>Видимость</p>
							<p className={styles.text_main}>Ветер</p>
						</div>
						<div className={styles['more_cont_info']}>
							<p className={styles.info_text}>{props.tempMax}°</p>
							<p className={styles.info_text}>{props.tempMin}°</p>
							<p className={styles.info_text}>{props.visibles}%</p>
							<p className={styles.info_text}>{props.windSpeed} м/с</p>
						</div>
					</div>
					<div className={styles.more_info_cont_down}>
						<div className={styles.more_cont_info}>
							<p className={styles.text_main}>Облачность</p>
							<p className={styles.text_main}>Давление на уровне земли</p>
							<p className={styles.text_main}>Закат</p>
							<p className={styles.text_main}>Рассвет</p>
						</div>
						<div className={styles['more_cont_info']}>
							<p className={styles.info_text}>{props.cloudless}</p>
							<p className={styles.info_text}>{props.sealevel} мм рт. ст.</p>
							<p className={styles.info_text}>{props.sunsetTime}</p>
							<p className={styles.info_text}>{props.sunriseTime}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MoreInformation
