import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import sun from './img/sun.png'
import temp from './img/temp.png'
import pressure from './img/pressure.png'
import precipitation from './img/precipitation.png'
import clouds from './img/mainly_cloudy.png'
import rain from './img/rain.png'

type Props = {
	tempe: number
	desWeather: string
	town: string
	cloudsDay: boolean
	sunnyDay: boolean
	rainDay: boolean
	fellLike: number
	pressuree: number
	humidityy: number
}
const Home = (props: Props) => {
	return (
		<div className={styles.weather_container}>
			<div className={styles.main_container}>
				<div className={styles.container_weather}>
					<div className={styles.cont_text}>
						<p className={styles.weather_text}>{props.tempe}°</p>
						<p className={styles.weather_text_today}>{props.desWeather}</p>
						<p className={styles.weather_town}>Город: {props.town}</p>
					</div>
					<div className={styles.cont_img}>
						<img
							src={
								(props.cloudsDay && clouds) ||
								(props.sunnyDay && sun) ||
								(props.rainDay && rain)
							}
							alt='icon'
							className={styles.weather_img}
						/>
					</div>
				</div>
				<div className={styles.information}>
					<div className={styles.infos_cont}>
						<div className={styles.infos_cont_main}>
							<img src={temp} alt='temp' className={styles.info_img} />
							<p className={styles.info_text_main}>Температура</p>
						</div>
						<p className={styles.infos_des}>
							{props.tempe}° ощущается как {props.fellLike}°
						</p>
					</div>
					<div className={styles.infos_cont}>
						<div className={styles.infos_cont_main}>
							<img src={pressure} alt='temp' className={styles.info_img} />
							<p className={styles.info_text_main}>Давление</p>
						</div>
						<p className={styles.infos_des}>{props.pressuree} мм рт.ст.</p>
					</div>
					<div className={styles.infos_cont}>
						<div className={styles.infos_cont_main}>
							<img src={precipitation} alt='temp' className={styles.info_img} />
							<p className={styles.info_text_main}>Осадки</p>
						</div>
						<p className={styles.infos_des}>{props.humidityy}%</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
