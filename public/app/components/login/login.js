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
            // $http({
            //   method: 'POST',
            //   url: 'http://localhost:3000/api/login',
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'Access-Control-Allow-Origin': '*',
            //   },
            //   data: JSON.stringify(user),
            // })
            $http.post('http://localhost:3000/api/login', user)
            .then((data) => {
              console.log('work!')
              console.log(data)
            })

            alert(user);
            console.log(user)
          }
        }
      ]
    });
})();
