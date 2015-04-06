var gerald = angular.module("gerald", [
	"ngRoute",
	"ngAnimate",
	"templates",
])

gerald.config(["$routeProvider", 
	function($routeProvider){
		$routeProvider.
			otherwise({
				templateUrl: 'home.html'
			})
	}
])

// rnfc.run(["$rootScope", "$location", function($rootScope, $location) {
// 	$rootScope.$on( "$routeChangeStart", function(event, next, current) {
// 		var path = next.$$route && next.$$route.originalPath || ""
// 		$location.path(path)
// 		path = path.substring(1)
// 		var navEl = $(".navbar-nav a[href=#" + path + "]")
// 		if(navEl[0]){
// 			$(".navbar-nav li").removeClass("selected")
// 			navEl.parent().addClass("selected") 
// 		}
// 	})

// 	$rootScope.$on("$viewContentLoaded", function(){
// 		$('.carousel').carousel({
// 		  interval: 3000
// 		})
// 	})
// }])

// rnfc.config(["$httpProvider", function($httpProvider){
// 	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
// }])


