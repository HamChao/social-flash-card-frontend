angular.module('app', [
    'ui.router',
    'environment',
    'ngCookies',
  ])
  .config(function(envServiceProvider) {
    // set the domains and variables for each environment
    envServiceProvider.config({
      domains: {
        local: ['localhost'],
        development: ['something.com'],
        staging: ['something.com'],
        production: ['something.com']
      },
      vars: {
        local: {
          test: 'hello',
        },
        development: {
          test: 'hello',
        },
        staging: {
          test: 'hello',
        },
        production: {
          test: 'hello',
        }
      }
    });

    // run the environment check, so the comprobation is made
    // before controllers and services are built
    envServiceProvider.check();
  })
  .run(function($rootScope, $state, $cookies, envService) {
    console.log(envService.read('test'));

    $rootScope.currentUser = $cookies.get('Session');
    // console.log($cookies.get('ParseSession'));
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;
      // Redirect
      if (toState.redirectTo) {
        event.preventDefault();
        $state.go(toState.redirectTo, toParams, { location: 'replace' })
      }
      // Check authen
      if (requireLogin && !$cookies.get('Session')) {
        event.preventDefault();
        $state.go('login', {})
      }
    });
  });
