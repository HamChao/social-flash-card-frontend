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
            template: '<home></home>',
            data: {
              requireLogin: false,
            },
          })
          .state('login', {
            url: '/login',
            template: '<login></login>',
            data: {
              requireLogin: false,
            },
          })
          .state('view', {
            url: '/view?:id',
            template: '<view></view>',
            data: {
              requireLogin: false,
            },
          })
          .state('memorize', {
            url: '/memorize?:id',
            template: '<memorize></memorize>',
            data: {
              requireLogin: false,
            },
          })
          .state('create', {
            url: '/create?:id',
            template: '<create></create>',
            data: {
              requireLogin: false,
            },
          })

        $locationProvider.html5Mode(true);
      }
    ]);
})();
