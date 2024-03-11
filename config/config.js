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
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
			classes: 'always'
		},
		{
			module: "updatenotification",
			position: "top_bar",
			classes: 'always'
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'always'
		},
		{
			module: "calendar",
			header: "Fanidi's calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/ayoubmoufid883%40gmail.com/private-c8e62525ac48e30facaad11f36693f2a/basic.ics"
					}
				]
			},
			classes: 'fanidi'
		},
		{
			module: "calendar",
			header: "Ayman's calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/allouchayman21%40gmail.com/private-c2b6284ad971cd842d5edfddd3f666a4/basic.ics"
					}
				]
			},
			classes: 'ayman'
		},
		{
			module: "compliments",
			position: "bottom_bar",
			classes: 'always'
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Agadir, MA",
				apiKey: "e4e036513ee802e4d8e66607be7de048"
			},
			classes: 'always'
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Agadir, MA",
				apiKey: "e4e036513ee802e4d8e66607be7de048"
			},
			classes: 'always'
		},
		{
			module: 'MMM-Face-Reco-DNN',
			classes: 'always',
			config: {
				// Logout 15 seconds after user was not detected any more
				// If they are detected within this period, the delay will start again
				logoutDelay: 1000000,
				// How often the recognition starts in milliseconds
				// With a Raspberry Pi 3+ it works well every 2 seconds
				checkInterval: 1000,
				// Use Raspberry Pi camera or another type
				// 1 = RasPi camera, 0 = other camera
				usePiCamera: 0,
				// If using another type of camera, you can choose
				// i.e. 0 = /dev/video0 or 'http://link.to/live'
				source: 0,
				// Rotate camera
				rotateCamera: 0,
				// Method of facial recognition
				// dnn = deep neural network, haar = haarcascade
				method: 'dnn',
				// Which face detection model to use
				// "hog" is less accurate but faster on CPUs
				// "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
				detectionMethod: 'hog',
				// How long in milliseconds modules take to hide and show
				animationSpeed: 0,
				// Should a welcome message be shown using the MagicMirror alerts module?
				welcomeMessage: true,
				// Dictionary for person name mapping in welcome message
				// Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
				usernameDisplayMapping: null,
				// Capture new pictures of recognized people, if unknown we save it in folder "unknown"
				// So you can extend your dataset and retrain it afterwards for better recognitions
				extendDataset: false,
				// If extendDataset is true, you need to set the full path of the dataset
				dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
				// How much distance between faces to consider it a match. Lower is more strict.
				tolerance: 3,
				// allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
				multiUser: 0,
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
