const moduleWeather= {
	namespaced: true,
	state: () => ({
		weather: null,
		current: true,
		daily: false,
		alerts: false,
		status: null,
		apiKey: "960ded423291e53a17af1f51a7d84e98"
	}),
	mutations: {
		SET_WEATHER(state, payload) {
            state.weather = payload;
        },
		SET_PAGE(state, payload) {
			for (const [key, value] of Object.entries(payload)){
				state[key] = value;
			}
		},
		SET_STATUS(state, payload) {
			state.status = payload;
		}
	},
	actions: {
		callWeatherApi(context, payload) {
			try {
				navigator.geolocation.getCurrentPosition(function(position) {
					let lat = position.coords.latitude;
					let lon = position.coords.longitude;
					axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + 
						lon + "&units=imperial&exclude=minutely&appid=" + context.state.apiKey)
						.then((response) => {
							localStorage.setItem('simply-weather', JSON.stringify(response.data));
							context.commit('SET_WEATHER', response.data);
							context.commit('SET_STATUS', 'online');
						})
						.catch(function (error) {
							let local = localStorage.getItem('simply-weather');
							if (local != null) {
								context.commit('SET_WEATHER', JSON.parse(local));
								context.commit('SET_STATUS', 'offline');
							} else {
								context.commit('SET_STATUS', 'offline - no data');
							}
						})
				});
			} catch (error) {
				let local = localStorage.getItem('simply-weather');
				if (local != null) {
					context.commit('SET_WEATHER', JSON.parse(local));
				} else {
					context.commit('SET_OFFLINE', true);
				}
			}
		},
		setPage(context, payload) {
			if (payload == 'current') {
				let data = {
					current: true,
					daily: false,
					alerts: false
				};
				context.commit('SET_PAGE', data);
			}
			if (payload == 'daily') {
				let data = {
					current: false,
					daily: true,
					alerts: false
				};
				context.commit('SET_PAGE', data);
			}
			if (payload == 'alerts') {
				let data = {
					current: false,
					daily: false,
					alerts: true 
				};
				context.commit('SET_PAGE', data);
			}
		}
	},
	getters: {
		getCurrent: state => state.weather.current,
		getHourly: state => state.weather.hourly,
		getDaily: state => state.weather.daily,
		getAlerts: state => state.weather.alerts,
		getCurrentStatus: state => state.current,
		getDailyStatus: state=> state.daily,
		getAlertsStatus: state => state.alerts,
		getStatus: state => state.status,
	}
}

const moduleIcons = {
	namespaced: true,
	state: () => ({
        thunderstorm: "./assets/wi-storm-showers.svg",
        drizzle: "./assets/wi-showers.svg", 
        rain: "./assets/wi-rain.svg",
        snow: "./assets/wi-snow.svg",
        atmosphere: "./assets/wi-dust.svg",
        clearDay: "./assets/wi-day-sunny.svg",
        clearNight: "./assets/wi-night-clear.svg",
        cloudsDay: "./assets/wi-day-cloudy.svg",
        cloudsNight: "./assets/wi-night-cloudy.svg"
	}),
	mutations: {
		
	},
	actions: {
        
	},
	getters: {
		getIcon: (state) => (icon) => {
            switch (icon) {
                case "11d":
                case "11n":
                    return state.thunderstorm;
                case "09d":
                case "09n":
                    return state.drizzle;
                case "10d":
                case "10n":
                    return state.rain;
                case "13d":
                case "13n":
                    return state.snow;
                case "50d":
                    return state.atmosphere;
                case "01d":
                    return state.clearDay;
                case "01n":
                    return state.clearNight;
                case "03d":
                case "04d":
                case "02d":
                    return state.cloudsDay;
                case "03n":
                case "04n":
                case "02n":
                    return state.cloudsNight;
                
            }

        }
	}
}
const store = Vuex.createStore({
	modules: {
		moduleWeather,
		moduleIcons
	}
})
const app = Vue.createApp({
	el: "#app",
	beforeMount() {
		this.$store.dispatch("moduleWeather/callWeatherApi");
	},
	computed: {
		current() {
			return this.$store.getters["moduleWeather/getCurrent"];
		},
		hourly() {
			return this.$store.getters["moduleWeather/getHourly"];
		},
		daily() {
			return this.$store.getters["moduleWeather/getDaily"];
		},
		alerts() {
			return this.$store.getters["moduleWeather/getAlerts"];
		},
		status() {
			return this.$store.getters["moduleWeather/getStatus"];
		},
		hasAlerts(){
			if (this.alerts != null) {
				navigator.vibrate(200, 100, 200, 100, 200);
				return true;
			} else {
				return false;
			}
		},
		currentPageStatus() {
			return this.$store.getters["moduleWeather/getCurrentStatus"];
		},
		dailyPageStatus() {
			return this.$store.getters["moduleWeather/getDailyStatus"];
		},
		alertsPageStatus() {
			return this.$store.getters["moduleWeather/getAlertsStatus"];
		}
	},
	methods: {
		setPage(page) {
			this.$store.dispatch('moduleWeather/setPage', page);
		},
  	},
	components: {
	}
});
app.component('current', {
	template: `
		<div id="current">
			<div id="temp" class="flex-pair">
				<div>
					{{Math.round(current.temp)}}
				</div>
				<div class="container-icon">
					<img src="./assets/wi-fahrenheit.svg">
				</div>
			</div>
			<div id="icon"><img v-bind:src="icon"></div>
			<div id="feel">Feels like: {{Math.round(current.feels_like)}}</div>
			<div id="hilo">
				{{Math.round(daily[0].temp.min)}} | {{Math.round(daily[0].temp.max)}}
			</div>
			<div id="sun" class="flex-pair">
				<div id="rise" class="flex-pair">
					<div class="container-icon">
						<img src="./assets/wi-sunrise.svg">
					</div>
					<div>
						{{sunrise}}
					</div>
				</div>
				<div id="set" class="flex-pair">
					<div class="container-icon">
						<img src="./assets/wi-sunset.svg">
					</div>
					<div>
						{{sunset}}
					</div>
				</div>
			</div>
			<div id="wind" class="flex-pair">
				<div class="container-icon">
					<img v-bind:src="wind">
				</div>
				<div>
					{{Math.round(current.wind_speed)}}mph
				</div>
			</div>
			<div id="precip" class="flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-raindrops.svg">
				</div>
				<div>
					{{pop}}%
				</div>
			</div>
			<div id="dwpt" class="flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-thermometer.svg">
				</div>
				<div>
					{{current.dew_point}}
				</div>
			</div>
			<div id="humid" class="flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-humidity.svg">
				</div>
				<div>
					{{current.humidity}}%
				</div>
			</div>
			<div id="baro" class="flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-barometer.svg">
				</div>
				<div>
					{{Math.round(current.pressure)}}hPa
				</div>
			</div>
			<div id="visi" class="flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-small-craft-advisory.svg">
				</div>
				<div>
					{{Math.round(current.visibility*0.000621371)}}mi
				</div>
			</div>
		</div>
	`,
	props: ['current', 'daily'],
	data() {
		return {
			iconCode: this.current.weather[0].icon,
			description: this.current.weather[0].description
		}
	},
	computed: {
		icon() {
			return this.$store.getters["moduleIcons/getIcon"](this.iconCode);
		},
		sunrise() {
			let milliseconds = this.current.sunrise * 1000;
			let dateObj = new Date(milliseconds);
			let hour = dateObj.getHours();
			let minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();	
			return hour + ":" + minutes;
		},
		sunset() {
			let milliseconds = this.current.sunset * 1000;
			let dateObj = new Date(milliseconds);
			let hour = dateObj.getHours();
			let minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();	
			return hour + ":" + minutes;
		},
		pop() {
			if (this.current.pop == null) {
				return 0;
			} else {
				return this.current.pop * 100;
			}
		},
		wind() {
			let wind = this.current.wind_deg;
			if (wind>337.5 || wind<=22.5) {
				return "./assets/wi-direction-up.svg";
			}
			if (wind>22.5 && wind<=67.5) {
				return "./assets/wi-direction-up-right.svg";
			}
			if (wind>67.5 && wind<=112.5) {
				return "./assets/wi-direction-right.svg";
			}
			if (wind>112.5 && wind<=157.5) {
				return "./assets/wi-direction-down-right.svg";
			}
			if (wind>157.5 && wind<=202.5) {
				return "./assets/wi-direction-down.svg";
			}
			if (wind>202.5 && wind<=245) {
				return "./assets/wi-direction-down-left.svg";
			}
			if (wind>245 && wind<=292.5) {
				return "./assets/wi-direction-left.svg";
			}
			if (wind>292.5 && wind<=337.5) {
				return "./assets/wi-direction-up-left.svg";
			}
		} 
	},
	methods: {
		
	}
});

app.component('hourly', {
	template: `
		<div class="hourly">
            <div>{{hour}}</div>
            <div class="flex-pair">{{Math.round(hourly.temp)}}<img src="./assets/wi-fahrenheit.svg"></div>
            <div class="hourly-icon">
				<img v-bind:src="icon">
			</div>
            <div>{{pop}}%</div>
            <div class="flex-pair">
                <div>
                    {{Math.round(hourly.wind_speed)}}mph
                </div>
                <div class="hourly-wind-dir">
                    <img v-bind:src="wind">
                </div>
            </div>
        </div>
	`,
    props: ['hourly'],
	data() {
		return {
			iconCode: this.hourly.weather[0].icon,
		}
	},
	computed: {
		icon() {
			return this.$store.getters["moduleIcons/getIcon"](this.iconCode);
		},
        hour() {
            let milliseconds = this.hourly.dt * 1000;
			let dateObj = new Date(milliseconds);
			let hour = dateObj.getHours();
			let minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();	
			return hour + ":" + minutes;
        },
        pop() {
			if (this.hourly.pop == null) {
				return 0;
			} else {
				return this.hourly.pop * 100;
			}
		},
        wind() {
			let wind = this.hourly.wind_deg;
			if (wind>337.5 || wind<=22.5) {
				return "./assets/wi-direction-up.svg";
			}
			if (wind>22.5 && wind<=67.5) {
				return "./assets/wi-direction-up-right.svg";
			}
			if (wind>67.5 && wind<=112.5) {
				return "./assets/wi-direction-right.svg";
			}
			if (wind>112.5 && wind<=157.5) {
				return "./assets/wi-direction-down-right.svg";
			}
			if (wind>157.5 && wind<=202.5) {
				return "./assets/wi-direction-down.svg";
			}
			if (wind>202.5 && wind<=245) {
				return "./assets/wi-direction-down-left.svg";
			}
			if (wind>245 && wind<=292.5) {
				return "./assets/wi-direction-left.svg";
			}
			if (wind>292.5 && wind<=337.5) {
				return "./assets/wi-direction-up-left.svg";
			}
		}
	},
	methods: {
		
	}
});
app.component('alert', {
	template: `
        <div id="alert">
			<div v-for="alert in alerts">
				<div>
					{{alert.event}}
				</div>
				<div>
					{{alert.description}}
				</div>
			</div>
        </div>
	`,
	props: ['alerts'],
	computed: {
        
	},
	methods: {
		
	}
});
app.component('day', {
	template: `
        <div class="day">
			<div class="day-temp flex-pair">
				<div>
					{{Math.round(day.temp.max)}}
				</div>
				<div class="container-icon">
					<img src="./assets/wi-fahrenheit.svg">
				</div>
			</div>
			<div class="day-icon">
				<div class="container-icon">
					<img v-bind:src="icon">
				</div>
			</div>
			<div class="day-sun flex-pair">
				<div class="day-sunrise flex-pair">
					<div class="container-icon">
						<img src="./assets/wi-sunrise.svg">
					</div>
					<div>
						{{sunrise}}
					</div>
				</div>
				<div class="day-sunset flex-pair">
					<div class="container-icon">
						<img src="./assets/wi-sunset.svg">
					</div>
					<div>
						{{sunset}}
					</div>
				</div>
			</div>
			<div class="day-hilo">
				{{Math.round(day.temp.min)}} | {{Math.round(day.temp.max)}}
			</div>
			<div class="day-precip flex-pair">
				<div class="container-icon">
					<img src="./assets/wi-raindrops.svg">
				</div>
				<div>
					{{pop}}
				</div>
			</div>
			<div class="day-wind flex-pair">
				<div>
					{{Math.round(day.wind_speed)}}
				</div>
				<div class="container-icon">
					<img v-bind:src="wind">
				</div>
			</div>
        </div>
	`,
	props: ['day'],
	data() {
		return {
			iconCode: this.day.weather[0].icon
		}
	},
	computed: {
		icon() {
			return this.$store.getters["moduleIcons/getIcon"](this.iconCode);
		},
		sunrise() {
			let milliseconds = this.day.sunrise * 1000;
			let dateObj = new Date(milliseconds);
			let hour = dateObj.getHours();
			let minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();	
			return hour + ":" + minutes;
		},
		sunset() {
			let milliseconds = this.day.sunset * 1000;
			let dateObj = new Date(milliseconds);
			let hour = dateObj.getHours();
			let minutes = dateObj.getMinutes() < 10 ? '0' + dateObj.getMinutes() : dateObj.getMinutes();	
			return hour + ":" + minutes;
		},
		pop() {
			if (this.day.pop == null) {
				return 0;
			} else {
				return Math.round(this.day.pop) * 100;
			}
		},
		wind() {
			let wind = this.day.wind_deg;
			if (wind>337.5 || wind<=22.5) {
				return "./assets/wi-direction-up.svg";
			}
			if (wind>22.5 && wind<=67.5) {
				return "./assets/wi-direction-up-right.svg";
			}
			if (wind>67.5 && wind<=112.5) {
				return "./assets/wi-direction-right.svg";
			}
			if (wind>112.5 && wind<=157.5) {
				return "./assets/wi-direction-down-right.svg";
			}
			if (wind>157.5 && wind<=202.5) {
				return "./assets/wi-direction-down.svg";
			}
			if (wind>202.5 && wind<=245) {
				return "./assets/wi-direction-down-left.svg";
			}
			if (wind>245 && wind<=292.5) {
				return "./assets/wi-direction-left.svg";
			}
			if (wind>292.5 && wind<=337.5) {
				return "./assets/wi-direction-up-left.svg";
			}
		}
	},
	methods: {
		
	}
});
app.use(store);
app.mount('#app');