var app = angular.module('geoapp', []);

app.controller('mainCtrl', function($scope,$http) {
		
		var vm = this;
		  
		var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

		$http.get('http://ip-api.com/json')
			.success(function(coordinates) {
				console.log(coordinates);

				var request = {
					method: 'GET',
					url: URL,
					params: {
					   q: coordinates.city,
					   mode: 'json',
					   units: 'metric',
					   cnt: '7',
					  appid: '2206d84c8189efe365465e3318f487aa'
					}
				  };

				 $http(request)
					.then(function(response) {
					  vm.data = response.data;
					  vm.city = response.data.city.name;
					  vm.country = response.data.city.country;
					  vm.lat = response.data.city.coord.lat;
					  vm.lon = response.data.city.coord.lon;
					  console.log(vm.data);
					}).
					catch(function(response) {
					  vm.data = response.data;
					});


		})


		


				


 
});


 