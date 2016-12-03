(function() {
  angular
    .module('app')
    .component('navbar', {
      templateUrl: 'app/shares/navbar/navbar.html',
      controllerAs: 'navbar',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        '$rootScope',
        '$http',
        function($scope, $location, $cookies, $state, $rootScope, $http) {
          const accessToken = $rootScope.currentUser
          this.isLogin = !!accessToken
          this.user = { name: 'Username' }

          $http({
              method: 'GET',
              url: 'https://social-flash-card.herokuapp.com/api/user/me',
              headers: {
                'X-Access-Token': accessToken,
              },
            })
            .then((response) => {
              this.user = response.data
            })


          this.logout = () => {
            $cookies.remove('accessToken')
            $state.go('home')
            this.isLogin = null
          }
        }
      ]
    });
})();
