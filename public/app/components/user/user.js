(function() {
  angular
    .module('app')
    .component('user', {
      templateUrl: 'app/components/user/user.html',
      controllerAs: 'user',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        '$http',
        '$rootScope',
        function($scope, $location, $cookies, $state, $http, $rootScope) {
          console.log($rootScope.currentUser)
          $http({
            method: 'GET',
            url: 'https://social-flash-card.herokuapp.com/api/user/me',
            headers: {
              'X-Access-Token': $rootScope.currentUser,
            },
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log('err')
            console.log(err)
          })

        }
      ]
    });
})();
