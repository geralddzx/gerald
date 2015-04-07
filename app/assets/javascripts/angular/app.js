var gerald = angular.module("gerald", [
	"ngRoute",
	"ngAnimate",
	"templates",
])

// gerald.config(["$routeProvider", 
// 	function($routeProvider){
// 		// $routeProvider.
// 		// 	otherwise({
// 		// 		templateUrl: 'home.html'
// 		// 	})
// 	}
// ])


gerald.run(["$rootScope", function ($rootScope) {
	$rootScope.selectNav = function (){
		$(".navbar-nav li").removeClass("selected")
		$(event.currentTarget).addClass("selected")
	}

	$(".navbar-nav li:first-child").addClass("selected")

	// $scope.imageUrls = window.imageUrls
	$("#gerald-title").click(function(){
		window.location = "/"
	})

	$("#gerald-title").hover(function() {
        $(this).css('cursor','pointer');
    });
}])

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


