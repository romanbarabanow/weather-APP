import React, { useState } from 'react'
import styles from './Header.module.scss'
import icon from './icon.png'
import { SearchOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Home from '../Home/Home'
import ky from 'ky'
import MoreInformation from '../MoreInformation/MoreInformation'

type Props = {}

const Header = (props: Props) => {
	const getWeather = async () => {
		setCountry(newInput.current.value)
		const weather = await ky
			.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${county}&lang=ru&appid=4db0dc1c43e9a5ed167c1b6eb6886051`,
				{
					retry: {
						limit: 10,
						methods: ['get'],
						statusCodes: [400],
					},
				}
			)
			.json()
		let weatherIcon: string = weather.weather[0].main
		if (weatherIcon == 'Clouds') {
			setSunnyDay(false)
			setCloudsDay(true)
			setRainDay(false)
		}
		if (weatherIcon == 'Clear') {
			setSunnyDay(true)
			setCloudsDay(false)
			setRainDay(false)
		}
		if (weatherIcon == 'Rain') {
			setSunnyDay(false)
			setCloudsDay(false)
			setRainDay(true)
		}
		setTown(weather.name)
		setPressuree(Math.ceil(weather.main.pressure * 0.75))
		setTempe(Math.ceil(weather.main.temp - 273))
		setFellLike(Math.ceil(weather.main.feels_like - 273))
		setHumidityy(Math.ceil(weather.main.humidity))
		setDesWeather(weather.weather[0].description)
		setSunsetTime(weather.sys.sunset)
		SetVisibles(Math.ceil(weather.visibility / 100))
		SetTempMax(Math.ceil(weather.main.temp_max - 273))
		SetTempMin(Math.ceil(weather.main.temp_min - 273))
		setSeaLevel(Math.ceil(weather.main.grnd_level * 0.75))
		setWindSpeed(weather.wind.speed)
		setCloudless(weather.clouds.all)
		const getSunSet = () => {
			let unix_timestamp = weather.sys.sunset
			let date = new Date(unix_timestamp * 1000)
			let hours = date.getHours()
			let minutes = '0' + date.getMinutes()
			let seconds = '0' + date.getSeconds()
			let sunrisesTime =
				hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
			setSunsetTime(sunrisesTime)
		}
		const getSunRise = () => {
			let unix_timestamp = weather.sys.sunrise
			let date = new Date(unix_timestamp * 1000)
			let hours = date.getHours()
			let minutes = '0' + date.getMinutes()
			let seconds = '0' + date.getSeconds()
			let sunrisesTime =
				hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
			setSunriseTime(sunrisesTime)
		}
		getSunRise()
		getSunSet()
	}
	const [sunsetTime, setSunsetTime] = useState('')
	const [sunriseTime, setSunriseTime] = useState('')
	const [visibles, SetVisibles] = useState(0)
	const [tempMax, SetTempMax] = useState(0)
	const [tempMin, SetTempMin] = useState(0)
	const [sealevel, setSeaLevel] = useState(0)
	const [windSpeed, setWindSpeed] = useState(0)
	const [cloudless, setCloudless] = useState(0)
	const [county, setCountry] = useState('')
	const [pressuree, setPressuree] = useState(0)
	const [town, setTown] = useState('')
	const [tempe, setTempe] = useState(0)
	const [fellLike, setFellLike] = useState(0)
	const [humidityy, setHumidityy] = useState(0)
	const [sunnyDay, setSunnyDay] = useState(true)
	const [cloudsDay, setCloudsDay] = useState(false)
	const [rainDay, setRainDay] = useState(false)
	const [desWeather, setDesWeather] = useState('')
	let newInput = React.createRef()
	const [darkTheme, setDarkTheme] = useState(false)
	return (
		<>
			<div className={styles.main__container}>
				<div className={styles.container_second}>
					<div className={styles.container}>
						<img src={icon} alt='icon' className={styles.img_header} />
						<p className={styles.header_title}>Weather</p>
					</div>
					<div className={styles.container_two}>
						<input
							className={styles.input}
							placeholder='Введите Город'
							ref={newInput}
						/>
						<Button
							type='primary'
							shape='circle'
							icon={<SearchOutlined />}
							onClick={getWeather}
						/>
					</div>
				</div>
			</div>
			<Home
				tempe={tempe}
				desWeather={desWeather}
				town={town}
				cloudsDay={cloudsDay}
				sunnyDay={sunnyDay}
				rainDay={rainDay}
				fellLike={fellLike}
				pressuree={pressuree}
				humidityy={humidityy}
			/>
			<MoreInformation
				sunsetTime={sunsetTime}
				sunriseTime={sunriseTime}
				visibles={visibles}
				tempMax={tempMax}
				tempMin={tempMin}
				sealevel={sealevel}
				windSpeed={windSpeed}
				cloudless={cloudless}
			/>
		</>
	)
}

export default Header
