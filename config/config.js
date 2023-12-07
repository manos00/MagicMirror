/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "de_DE",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			config: {
				welcome_message: "Mirror started successfully!"
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Calendar Personal",
			position: "top_left",
			config: {
				timeFormat: "absolute",
				urgency: 7,
				dateFormat: "MMM Do, HH:MM",
				titleReplace: {"mit Ange":"mit Manos"},
				customEvents: [
					{keyword: 'Geburtstag', symbol: 'cake-candles'},
					{keyword: 'Reise', symbol: 'compass'},
					{keyword: 'Urlaub', symbol: 'compass'},
					{keyword: 'Flug', symbol: 'plane'},
					{keyword: 'Flight', symbol: 'plane'}
				],
				calendars: [
					{	
						fetchInterval: 24 * 60 * 60 * 1000,
						symbol: "calendar",
						url: "https://nextcloud.manosfiles.de/remote.php/dav/calendars/ange/personal?export",
						auth: {
								user: "ange",
								pass: 'Angelo4ek!',
								method: "basic"
							}
					}
				]
			}
		},
		{
			module: "compliments",
			position: "bottom",
			config: {
				compliments: {
					anytime: [
						"Hey there sexy!"
					],
					morning: [
						"Good morning, handsome!",
						"Enjoy your day!",
						"How was your sleep?"
					],
					afternoon: [
						"Hello, beauty!",
						"You look sexy!",
						"Looking good today!"
					],
					evening: [
						"Wow, you look hot!",
						"You look nice!",
						"Hi, sexy!"
					],
					"....-01-01": [
						"Happy new year!"
					],
					"....-10-31": [
						"Happy Halloween!"
					],
					"....-12-08": [
						"Happy Birthday!"
					],
					"....-11-01": [
						"Happy Anniversary <333"
					]
				}
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Bendorf",
				locationID: "2951111", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "dc24cdebbf1afe9650c4f8d5100198a2",
				decimalSymbol: ","
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Bendorf",
				locationID: "2951111", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "dc24cdebbf1afe9650c4f8d5100198a2",
				roundTemp: true
			}
		},
		// {
		// 	module: 'MMM-EyeCandy',
		// 	position: 'bottom_right',
		// 	config: {
		// 		maxWidth: "20%",
		// 		ownImagePath: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd242dTJxamUwejQzeXd3ZTM5NWNtMTl3dDg4dm9ydnl5b2V4bGdhZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlNmmF21uwMSp9u/giphy.gif",
		// 	}
		// },
		{
			module: 'MMM-AutoDimmer',
			position: 'fullscreen_above',
			header: '',
			// Don't change anything above this line
			config: {
				schedules: [] // Uses all default values
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
