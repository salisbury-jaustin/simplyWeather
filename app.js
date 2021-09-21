const moduleWeather= {
	namespaced: true,
	state: () => ({
		weather: null,
		current: true,
		daily: false,
		alerts: false,
		apiKey: "960ded423291e53a17af1f51a7d84e98",
	}),
	mutations: {
		SET_WEATHER(state, payload) {
            state.weather = payload;
        },
		SET_PAGE(state, payload) {
			for (const [key, value] of Object.entries(payload)){
				state[key] = value;
			}
		}
	},
	actions: {
		callWeatherApi(context, payload) {
			navigator.geolocation.getCurrentPosition(function(position) {
				let lat = position.coords.latitude;
				let lon = position.coords.longitude;
				axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + 
					lon + "&exclude=minutely&appid=" + context.state.apiKey)
					.then((response) => {
						context.commit('SET_WEATHER', response.data);
				})
			});
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
	}
}

const store = Vuex.createStore({
	modules: {
		moduleWeather
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
		hasAlerts(){
			if (this.alerts != null) {
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
		}
	},
	components: {
	}
});
app.component('current', {
	template: `
		<div id="current">
			<div id="temp">{{current.temp}}</div>
			<div id="icon">{{current.weather[0].description}}</div>
			<div id="feel">Feels like: {{current.feels_like}}</div>
			<div id="hilo"></div>
			<div id="sun">
				<div id="rise">{{current.sunrise}}</div>
				<div id="set">{{current.sunset}}</div>
			</div>
			<div id="wind">{{current.wind_speed}}</div>
			<div id="precip"></div>
			<div id="dwpt">{{current.dew_point}}</div>
			<div id="humid">{{current.humidity}}</div>
			<div id="baro">{{current.pressure}}</div>
			<div id="visi">{{current.visibility}}</div>
		</div>
	`,
	props: ['current'],
	computed: {

	},
	methods: {
		
	}
});

app.component('hourly', {
	template: `
		<div class="hourly">
            <div>{{hourly.dt}}</div>
            <div>{{hourly.temp}}</div>
            <div>{{hourly.weather[0].description}}</div>
            <div>{{hourly.pop}}</div>
            <div>{{hourly.wind_speed}}</div>
        </div>
	`,
    props: ['hourly'],
	computed: {
		
	},
	methods: {
		
	}
});
app.component('alert', {
	template: `
        <div id="alert">
             
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
        <div id="day">
			<div class="day-temp">
				{{day.temp.max}}
			</div>
			<div class="day-icon">
				{{day.weather[0].description}}
			</div>
			<div class="day-sun">
				<div class="day-sunrise">
					{{day.sunrise}}
				</div>
				<div class="day-sunset">
					{{day.sunset}}
				</div>
			</div>
			<div class="day-hilo">
				{{day.temp.min}} | {{day.temp.max}}
			</div>
			<div class="day-precip">
				{{day.pop}}
			</div>
			<div class="day-wind">
				{{day.wind_speed}}
			</div>
        </div>
	`,
	props: ['day'],
	computed: {

	},
	methods: {
		
	}
});
app.use(store);
app.mount('#app');