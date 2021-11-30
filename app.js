const moduleWeather= {
	namespaced: true,
	state: () => ({
		weather: /*{
			
			"lat": 39.0997,
			"lon": -94.5783,
			"timezone": "America/Chicago",
			"timezone_offset": -21600,
			"current": {
				"dt": 1638213687,
				"sunrise": 1638191820,
				"sunset": 1638226614,
				"temp": 62.85,
				"feels_like": 60.76,
				"pressure": 1012,
				"humidity": 41,
				"dew_point": 38.82,
				"uvi": 1.89,
				"clouds": 1,
				"visibility": 10000,
				"wind_speed": 8.01,
				"wind_deg": 220,
				"weather": [
					{
						"id": 800,
						"main": "Clear",
						"description": "clear sky",
						"icon": "01d"
					}
				]
			},
			"hourly": [
				{
					"dt": 1638212400,
					"temp": 62.85,
					"feels_like": 60.76,
					"pressure": 1012,
					"humidity": 41,
					"dew_point": 38.82,
					"uvi": 1.89,
					"clouds": 1,
					"visibility": 10000,
					"wind_speed": 11.99,
					"wind_deg": 242,
					"wind_gust": 20.78,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638216000,
					"temp": 63.32,
					"feels_like": 61.18,
					"pressure": 1012,
					"humidity": 39,
					"dew_point": 37.98,
					"uvi": 1.4,
					"clouds": 5,
					"visibility": 10000,
					"wind_speed": 11.27,
					"wind_deg": 244,
					"wind_gust": 20.15,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638219600,
					"temp": 63.88,
					"feels_like": 61.75,
					"pressure": 1012,
					"humidity": 38,
					"dew_point": 37.81,
					"uvi": 0.78,
					"clouds": 17,
					"visibility": 10000,
					"wind_speed": 9.13,
					"wind_deg": 245,
					"wind_gust": 19.62,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638223200,
					"temp": 62.65,
					"feels_like": 60.55,
					"pressure": 1011,
					"humidity": 41,
					"dew_point": 38.64,
					"uvi": 0.27,
					"clouds": 20,
					"visibility": 10000,
					"wind_speed": 6.98,
					"wind_deg": 243,
					"wind_gust": 14.09,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638226800,
					"temp": 58.6,
					"feels_like": 56.32,
					"pressure": 1012,
					"humidity": 46,
					"dew_point": 37.92,
					"uvi": 0,
					"clouds": 22,
					"visibility": 10000,
					"wind_speed": 7.47,
					"wind_deg": 241,
					"wind_gust": 11.07,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638230400,
					"temp": 55.74,
					"feels_like": 53.37,
					"pressure": 1012,
					"humidity": 50,
					"dew_point": 37.15,
					"uvi": 0,
					"clouds": 23,
					"visibility": 10000,
					"wind_speed": 7.58,
					"wind_deg": 253,
					"wind_gust": 13.87,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638234000,
					"temp": 54.77,
					"feels_like": 52.34,
					"pressure": 1013,
					"humidity": 51,
					"dew_point": 37.08,
					"uvi": 0,
					"clouds": 2,
					"visibility": 10000,
					"wind_speed": 7.65,
					"wind_deg": 262,
					"wind_gust": 15.93,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638237600,
					"temp": 53.85,
					"feels_like": 51.48,
					"pressure": 1014,
					"humidity": 54,
					"dew_point": 37.35,
					"uvi": 0,
					"clouds": 3,
					"visibility": 10000,
					"wind_speed": 7.02,
					"wind_deg": 276,
					"wind_gust": 12.26,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638241200,
					"temp": 53.1,
					"feels_like": 50.74,
					"pressure": 1014,
					"humidity": 56,
					"dew_point": 37.65,
					"uvi": 0,
					"clouds": 2,
					"visibility": 10000,
					"wind_speed": 6.38,
					"wind_deg": 281,
					"wind_gust": 8.39,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638244800,
					"temp": 52.21,
					"feels_like": 49.86,
					"pressure": 1015,
					"humidity": 58,
					"dew_point": 37.76,
					"uvi": 0,
					"clouds": 2,
					"visibility": 10000,
					"wind_speed": 6.04,
					"wind_deg": 297,
					"wind_gust": 7.23,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638248400,
					"temp": 51.31,
					"feels_like": 48.97,
					"pressure": 1015,
					"humidity": 60,
					"dew_point": 37.74,
					"uvi": 0,
					"clouds": 3,
					"visibility": 10000,
					"wind_speed": 5.77,
					"wind_deg": 325,
					"wind_gust": 6.73,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638252000,
					"temp": 50.36,
					"feels_like": 48,
					"pressure": 1016,
					"humidity": 62,
					"dew_point": 37.72,
					"uvi": 0,
					"clouds": 4,
					"visibility": 10000,
					"wind_speed": 6.31,
					"wind_deg": 355,
					"wind_gust": 10.22,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638255600,
					"temp": 49.26,
					"feels_like": 46.8,
					"pressure": 1016,
					"humidity": 64,
					"dew_point": 37.63,
					"uvi": 0,
					"clouds": 7,
					"visibility": 10000,
					"wind_speed": 5.99,
					"wind_deg": 6,
					"wind_gust": 8.75,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638259200,
					"temp": 48.25,
					"feels_like": 45.95,
					"pressure": 1017,
					"humidity": 66,
					"dew_point": 37.4,
					"uvi": 0,
					"clouds": 6,
					"visibility": 10000,
					"wind_speed": 5.37,
					"wind_deg": 13,
					"wind_gust": 6.35,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638262800,
					"temp": 47.35,
					"feels_like": 45.07,
					"pressure": 1017,
					"humidity": 68,
					"dew_point": 37.17,
					"uvi": 0,
					"clouds": 10,
					"visibility": 10000,
					"wind_speed": 5.08,
					"wind_deg": 18,
					"wind_gust": 5.48,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638266400,
					"temp": 46.49,
					"feels_like": 43.81,
					"pressure": 1017,
					"humidity": 70,
					"dew_point": 37.06,
					"uvi": 0,
					"clouds": 9,
					"visibility": 10000,
					"wind_speed": 5.46,
					"wind_deg": 23,
					"wind_gust": 6.51,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638270000,
					"temp": 45.64,
					"feels_like": 42.85,
					"pressure": 1018,
					"humidity": 72,
					"dew_point": 37.02,
					"uvi": 0,
					"clouds": 23,
					"visibility": 10000,
					"wind_speed": 5.37,
					"wind_deg": 36,
					"wind_gust": 6.64,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638273600,
					"temp": 45.82,
					"feels_like": 42.84,
					"pressure": 1018,
					"humidity": 71,
					"dew_point": 37.08,
					"uvi": 0,
					"clouds": 36,
					"visibility": 10000,
					"wind_speed": 5.75,
					"wind_deg": 44,
					"wind_gust": 9.42,
					"weather": [
						{
							"id": 802,
							"main": "Clouds",
							"description": "scattered clouds",
							"icon": "03n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638277200,
					"temp": 45.19,
					"feels_like": 42.26,
					"pressure": 1019,
					"humidity": 73,
					"dew_point": 37.17,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.48,
					"wind_deg": 41,
					"wind_gust": 8.34,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638280800,
					"temp": 46.44,
					"feels_like": 43.57,
					"pressure": 1020,
					"humidity": 72,
					"dew_point": 37.69,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.75,
					"wind_deg": 58,
					"wind_gust": 14.05,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638284400,
					"temp": 48.11,
					"feels_like": 45.34,
					"pressure": 1021,
					"humidity": 68,
					"dew_point": 38.12,
					"uvi": 0.22,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.15,
					"wind_deg": 48,
					"wind_gust": 13.38,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638288000,
					"temp": 50.32,
					"feels_like": 47.97,
					"pressure": 1021,
					"humidity": 62,
					"dew_point": 37.72,
					"uvi": 0.5,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.02,
					"wind_deg": 50,
					"wind_gust": 9.71,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638291600,
					"temp": 51.1,
					"feels_like": 48.69,
					"pressure": 1022,
					"humidity": 59,
					"dew_point": 37.2,
					"uvi": 0.83,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.3,
					"wind_deg": 58,
					"wind_gust": 8.41,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638295200,
					"temp": 51.91,
					"feels_like": 49.42,
					"pressure": 1021,
					"humidity": 56,
					"dew_point": 36.75,
					"uvi": 1.02,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 3.29,
					"wind_deg": 48,
					"wind_gust": 4.63,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638298800,
					"temp": 52.12,
					"feels_like": 49.68,
					"pressure": 1020,
					"humidity": 56,
					"dew_point": 36.77,
					"uvi": 1.42,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 2.64,
					"wind_deg": 118,
					"wind_gust": 3.8,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0.24
				},
				{
					"dt": 1638302400,
					"temp": 52.5,
					"feels_like": 50.04,
					"pressure": 1020,
					"humidity": 55,
					"dew_point": 36.84,
					"uvi": 1.05,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 2.28,
					"wind_deg": 113,
					"wind_gust": 2.89,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0.25
				},
				{
					"dt": 1638306000,
					"temp": 53.29,
					"feels_like": 50.86,
					"pressure": 1019,
					"humidity": 54,
					"dew_point": 36.9,
					"uvi": 0.59,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.23,
					"wind_deg": 137,
					"wind_gust": 5.37,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"pop": 0.21
				},
				{
					"dt": 1638309600,
					"temp": 52.63,
					"feels_like": 50.27,
					"pressure": 1018,
					"humidity": 57,
					"dew_point": 37.89,
					"uvi": 0.26,
					"clouds": 78,
					"visibility": 10000,
					"wind_speed": 4.94,
					"wind_deg": 119,
					"wind_gust": 7.9,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04d"
						}
					],
					"pop": 0.21
				},
				{
					"dt": 1638313200,
					"temp": 48.27,
					"feels_like": 46.76,
					"pressure": 1018,
					"humidity": 66,
					"dew_point": 37.2,
					"uvi": 0,
					"clouds": 63,
					"visibility": 10000,
					"wind_speed": 4.16,
					"wind_deg": 95,
					"wind_gust": 4.16,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0.21
				},
				{
					"dt": 1638316800,
					"temp": 46.42,
					"feels_like": 45.43,
					"pressure": 1018,
					"humidity": 71,
					"dew_point": 37.27,
					"uvi": 0,
					"clouds": 54,
					"visibility": 10000,
					"wind_speed": 3.2,
					"wind_deg": 136,
					"wind_gust": 3.33,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0.21
				},
				{
					"dt": 1638320400,
					"temp": 45.55,
					"feels_like": 43.83,
					"pressure": 1018,
					"humidity": 74,
					"dew_point": 37.78,
					"uvi": 0,
					"clouds": 5,
					"visibility": 10000,
					"wind_speed": 3.89,
					"wind_deg": 169,
					"wind_gust": 4.14,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638324000,
					"temp": 45.21,
					"feels_like": 42.89,
					"pressure": 1018,
					"humidity": 78,
					"dew_point": 38.75,
					"uvi": 0,
					"clouds": 51,
					"visibility": 10000,
					"wind_speed": 4.59,
					"wind_deg": 179,
					"wind_gust": 5.26,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638327600,
					"temp": 45.19,
					"feels_like": 43.02,
					"pressure": 1018,
					"humidity": 83,
					"dew_point": 40.24,
					"uvi": 0,
					"clouds": 67,
					"visibility": 10000,
					"wind_speed": 4.38,
					"wind_deg": 213,
					"wind_gust": 5.5,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638331200,
					"temp": 45.39,
					"feels_like": 43,
					"pressure": 1018,
					"humidity": 88,
					"dew_point": 41.85,
					"uvi": 0,
					"clouds": 75,
					"visibility": 10000,
					"wind_speed": 4.72,
					"wind_deg": 213,
					"wind_gust": 6.15,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638334800,
					"temp": 45.64,
					"feels_like": 44.26,
					"pressure": 1017,
					"humidity": 91,
					"dew_point": 43.02,
					"uvi": 0,
					"clouds": 80,
					"visibility": 10000,
					"wind_speed": 3.51,
					"wind_deg": 234,
					"wind_gust": 3.94,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638338400,
					"temp": 46.78,
					"feels_like": 45.63,
					"pressure": 1016,
					"humidity": 89,
					"dew_point": 43.61,
					"uvi": 0,
					"clouds": 84,
					"visibility": 10000,
					"wind_speed": 3.42,
					"wind_deg": 216,
					"wind_gust": 3.74,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638342000,
					"temp": 46.96,
					"feels_like": 45.14,
					"pressure": 1016,
					"humidity": 87,
					"dew_point": 43.25,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 4.29,
					"wind_deg": 230,
					"wind_gust": 5.21,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638345600,
					"temp": 47.03,
					"feels_like": 44.01,
					"pressure": 1015,
					"humidity": 85,
					"dew_point": 42.58,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.22,
					"wind_deg": 215,
					"wind_gust": 10.49,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638349200,
					"temp": 47.25,
					"feels_like": 44.44,
					"pressure": 1014,
					"humidity": 81,
					"dew_point": 41.76,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 5.91,
					"wind_deg": 207,
					"wind_gust": 13.27,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638352800,
					"temp": 46.83,
					"feels_like": 43.72,
					"pressure": 1014,
					"humidity": 81,
					"dew_point": 41.11,
					"uvi": 0,
					"clouds": 100,
					"visibility": 10000,
					"wind_speed": 6.31,
					"wind_deg": 222,
					"wind_gust": 14.61,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638356400,
					"temp": 44.89,
					"feels_like": 40.98,
					"pressure": 1014,
					"humidity": 85,
					"dew_point": 40.59,
					"uvi": 0,
					"clouds": 81,
					"visibility": 10000,
					"wind_speed": 7.09,
					"wind_deg": 234,
					"wind_gust": 16.98,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638360000,
					"temp": 44.35,
					"feels_like": 40.28,
					"pressure": 1014,
					"humidity": 86,
					"dew_point": 40.28,
					"uvi": 0,
					"clouds": 68,
					"visibility": 10000,
					"wind_speed": 7.2,
					"wind_deg": 249,
					"wind_gust": 20.51,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638363600,
					"temp": 44.2,
					"feels_like": 39.99,
					"pressure": 1015,
					"humidity": 85,
					"dew_point": 39.76,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 7.4,
					"wind_deg": 256,
					"wind_gust": 21.7,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01n"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638367200,
					"temp": 45.23,
					"feels_like": 40.35,
					"pressure": 1016,
					"humidity": 79,
					"dew_point": 38.89,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 9.4,
					"wind_deg": 284,
					"wind_gust": 26.71,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638370800,
					"temp": 49.24,
					"feels_like": 45.84,
					"pressure": 1016,
					"humidity": 66,
					"dew_point": 38.32,
					"uvi": 0.39,
					"clouds": 1,
					"visibility": 10000,
					"wind_speed": 8.01,
					"wind_deg": 303,
					"wind_gust": 23.67,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638374400,
					"temp": 53.78,
					"feels_like": 51.4,
					"pressure": 1015,
					"humidity": 54,
					"dew_point": 37.53,
					"uvi": 0.89,
					"clouds": 9,
					"visibility": 10000,
					"wind_speed": 8.23,
					"wind_deg": 306,
					"wind_gust": 15.52,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638378000,
					"temp": 57.45,
					"feels_like": 55.06,
					"pressure": 1016,
					"humidity": 46,
					"dew_point": 36.79,
					"uvi": 1.46,
					"clouds": 13,
					"visibility": 10000,
					"wind_speed": 9.37,
					"wind_deg": 311,
					"wind_gust": 15.82,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"pop": 0
				},
				{
					"dt": 1638381600,
					"temp": 59.99,
					"feels_like": 57.56,
					"pressure": 1016,
					"humidity": 40,
					"dew_point": 35.85,
					"uvi": 1.81,
					"clouds": 21,
					"visibility": 10000,
					"wind_speed": 9.62,
					"wind_deg": 305,
					"wind_gust": 14.92,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"pop": 0
				}
			],
			"daily": [
				{
					"dt": 1638208800,
					"sunrise": 1638191820,
					"sunset": 1638226614,
					"moonrise": 1638171300,
					"moonset": 1638217020,
					"moon_phase": 0.83,
					"temp": {
						"day": 62.19,
						"min": 41.31,
						"max": 63.88,
						"night": 51.31,
						"eve": 55.74,
						"morn": 42.71
					},
					"feels_like": {
						"day": 59.99,
						"night": 48.97,
						"eve": 53.37,
						"morn": 36.41
					},
					"pressure": 1012,
					"humidity": 40,
					"dew_point": 37.6,
					"wind_speed": 11.99,
					"wind_deg": 242,
					"wind_gust": 32.08,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"clouds": 1,
					"pop": 0,
					"uvi": 2.14
				},
				{
					"dt": 1638295200,
					"sunrise": 1638278280,
					"sunset": 1638312997,
					"moonrise": 1638261840,
					"moonset": 1638305040,
					"moon_phase": 0.86,
					"temp": {
						"day": 51.91,
						"min": 45.19,
						"max": 53.29,
						"night": 45.64,
						"eve": 46.42,
						"morn": 45.82
					},
					"feels_like": {
						"day": 49.42,
						"night": 44.26,
						"eve": 45.43,
						"morn": 42.84
					},
					"pressure": 1021,
					"humidity": 56,
					"dew_point": 36.75,
					"wind_speed": 6.31,
					"wind_deg": 355,
					"wind_gust": 14.05,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"clouds": 100,
					"pop": 0.25,
					"uvi": 1.42
				},
				{
					"dt": 1638381600,
					"sunrise": 1638364739,
					"sunset": 1638399383,
					"moonrise": 1638352560,
					"moonset": 1638393180,
					"moon_phase": 0.9,
					"temp": {
						"day": 59.99,
						"min": 44.2,
						"max": 61.52,
						"night": 53.08,
						"eve": 53.38,
						"morn": 44.35
					},
					"feels_like": {
						"day": 57.56,
						"night": 50.25,
						"eve": 50.68,
						"morn": 40.28
					},
					"pressure": 1016,
					"humidity": 40,
					"dew_point": 35.85,
					"wind_speed": 12.37,
					"wind_deg": 233,
					"wind_gust": 35.72,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"clouds": 21,
					"pop": 0,
					"uvi": 1.81
				},
				{
					"dt": 1638468000,
					"sunrise": 1638451197,
					"sunset": 1638485771,
					"moonrise": 1638443460,
					"moonset": 1638481620,
					"moon_phase": 0.94,
					"temp": {
						"day": 67.03,
						"min": 50.81,
						"max": 70.32,
						"night": 56.21,
						"eve": 59.67,
						"morn": 50.81
					},
					"feels_like": {
						"day": 64.74,
						"night": 53.83,
						"eve": 57.31,
						"morn": 47.84
					},
					"pressure": 1015,
					"humidity": 28,
					"dew_point": 33.33,
					"wind_speed": 13.2,
					"wind_deg": 244,
					"wind_gust": 37.83,
					"weather": [
						{
							"id": 801,
							"main": "Clouds",
							"description": "few clouds",
							"icon": "02d"
						}
					],
					"clouds": 15,
					"pop": 0,
					"uvi": 2.02
				},
				{
					"dt": 1638554400,
					"sunrise": 1638537654,
					"sunset": 1638572160,
					"moonrise": 1638534600,
					"moonset": 1638570480,
					"moon_phase": 0.98,
					"temp": {
						"day": 65.34,
						"min": 49.44,
						"max": 68.92,
						"night": 58.51,
						"eve": 61,
						"morn": 49.44
					},
					"feels_like": {
						"day": 64.35,
						"night": 58.33,
						"eve": 60.84,
						"morn": 46.94
					},
					"pressure": 1011,
					"humidity": 59,
					"dew_point": 50.65,
					"wind_speed": 8.57,
					"wind_deg": 206,
					"wind_gust": 15.23,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04d"
						}
					],
					"clouds": 69,
					"pop": 0,
					"uvi": 2.04
				},
				{
					"dt": 1638640800,
					"sunrise": 1638624110,
					"sunset": 1638658552,
					"moonrise": 1638625740,
					"moonset": 1638659880,
					"moon_phase": 0,
					"temp": {
						"day": 48.09,
						"min": 37.49,
						"max": 56.43,
						"night": 37.49,
						"eve": 40.91,
						"morn": 45.5
					},
					"feels_like": {
						"day": 42.06,
						"night": 31.66,
						"eve": 35.64,
						"morn": 38.5
					},
					"pressure": 1025,
					"humidity": 37,
					"dew_point": 23.31,
					"wind_speed": 16.49,
					"wind_deg": 9,
					"wind_gust": 37.11,
					"weather": [
						{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "01d"
						}
					],
					"clouds": 10,
					"pop": 0,
					"uvi": 3
				},
				{
					"dt": 1638727200,
					"sunrise": 1638710564,
					"sunset": 1638744946,
					"moonrise": 1638716640,
					"moonset": 1638749880,
					"moon_phase": 0.06,
					"temp": {
						"day": 48.15,
						"min": 35.22,
						"max": 50.11,
						"night": 39.15,
						"eve": 45.48,
						"morn": 35.67
					},
					"feels_like": {
						"day": 44.19,
						"night": 29.43,
						"eve": 38.39,
						"morn": 29.62
					},
					"pressure": 1015,
					"humidity": 46,
					"dew_point": 28.38,
					"wind_speed": 19.71,
					"wind_deg": 314,
					"wind_gust": 33.2,
					"weather": [
						{
							"id": 804,
							"main": "Clouds",
							"description": "overcast clouds",
							"icon": "04d"
						}
					],
					"clouds": 87,
					"pop": 0,
					"uvi": 3
				},
				{
					"dt": 1638813600,
					"sunrise": 1638797018,
					"sunset": 1638831343,
					"moonrise": 1638807000,
					"moonset": 1638840480,
					"moon_phase": 0.1,
					"temp": {
						"day": 36.07,
						"min": 28.51,
						"max": 39.16,
						"night": 37.56,
						"eve": 35.55,
						"morn": 28.51
					},
					"feels_like": {
						"day": 30.83,
						"night": 29.28,
						"eve": 28.83,
						"morn": 18
					},
					"pressure": 1025,
					"humidity": 39,
					"dew_point": 13.73,
					"wind_speed": 18.9,
					"wind_deg": 312,
					"wind_gust": 36.06,
					"weather": [
						{
							"id": 803,
							"main": "Clouds",
							"description": "broken clouds",
							"icon": "04d"
						}
					],
					"clouds": 62,
					"pop": 0,
					"uvi": 3
				}
			]
		
		}*/
		null,
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