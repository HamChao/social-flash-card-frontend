(function() {
  angular
    .module('app')
    .config([
      '$stateProvider',
      '$locationProvider',
      function config($stateProvider, $locationProvider) {
        $stateProvider
          .state('home', {
            url: '/',
            templateUrl: 'app/components/home/home.html',
            data: {
              requireLogin: false,
            },
          })
          .state('login', {
            url: '/login',
            templateUrl: 'app/shares/login.html',
            data: {
              requireLogin: false,
            },
          })

        $locationProvider.html5Mode(true);
      }
    ]);
})();
