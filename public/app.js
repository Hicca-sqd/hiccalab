var app = angular.module( 'hiccalab', [ //ту пишем названия библиотек
	'ui.router', 'ngCookies'
] );
app.config( routeConfig );
routeConfig.$inject = [ '$stateProvider', '$urlRouterProvider','$locationProvider']; //инджект модуль 
//1) создаем страницы с помощью стате для каждой страницы пишешь новый стате, с помощью стстае можно созд новые страницы 2) если не существует такой страницы то он кидает человека на гл страницу 3) 
function routeConfig( $stateProvider, $urlRouterProvider, $locationProvider ) {
	$locationProvider.html5Mode( true );
	$urlRouterProvider.otherwise( '/' );
	$stateProvider.state( 'home', { //тут пишешь название стате
		url: '/',
		templateUrl: '/views/home.html',
		controller: 'MainCtrl',
		controllerAs: 'hc'
	} );
}