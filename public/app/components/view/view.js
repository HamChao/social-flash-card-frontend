(function() {
  angular
    .module('app')
    .component('view', {
      templateUrl: 'app/components/view/view.html',
      controllerAs: 'view',
      controller: [
        '$scope',
        '$location',
        '$cookies',
        '$state',
        '$http',
        '$rootScope',
        function($scope, $location, $cookies, $state, $http, $rootScope) {
          const { id } = $location.search();

          this.deck = {}

          /**
           * Fetch data
           */
          $http({
              method: 'GET',
              url: `https://social-flash-card.herokuapp.com/api/deck/${id}`,
              headers: {
                'X-Access-Token': $rootScope.currentUser,
              },
            })
            .then((response) => {
              console.log(response)
              this.deck = response.data;
            })


          this.like = () => {

          }

          this.save = () => {

          }

          this.learn = () => {

          }

          this.share = () => {

          }
        }
      ]
    });
})();
