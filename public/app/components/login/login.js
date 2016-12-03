(function() {
  angular
    .module('app')
    .component('login', {
      templateUrl: 'app/components/login/login.html',
      controllerAs: 'login',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        '$http',
        function($scope, $location, $cookies, $state, $http) {
          this.login = (user) => {
            $http({
              method: 'POST',
              url: 'https://social-flash-card.herokuapp.com/api/login',
              headers: {
                'Content-Type': 'application/json',
              },
              data: JSON.stringify(user),
            })
            .then((response) => {
              console.log('work!')
              $cookies.put('accessToken',response.data.accessToken)
              console.log($cookies.get('accessToken'))
              $state.go('home')
            })
          }
        }
      ]
    });
})();
